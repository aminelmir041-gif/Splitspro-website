from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import logging
from pathlib import Path
from pydantic import BaseModel, Field, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="SplitsPro API")
api_router = APIRouter(prefix="/api")


def now_iso():
    return datetime.now(timezone.utc).isoformat()


# ---------------- Models ----------------
class QuoteCreate(BaseModel):
    name: str
    phone: str
    service: str
    suburb: str
    message: Optional[str] = ""

    @field_validator("name", "phone", "service", "suburb")
    @classmethod
    def not_blank(cls, v):
        if not v or not v.strip():
            raise ValueError("Field cannot be empty")
        return v.strip()

    @field_validator("phone")
    @classmethod
    def valid_phone(cls, v):
        digits = re.sub(r"\D", "", v)
        if len(digits) < 8:
            raise ValueError("Please enter a valid phone number")
        return v.strip()


class Quote(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    service: str
    suburb: str
    message: str = ""
    created_at: str = Field(default_factory=now_iso)


class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    suburb: str
    rating: int = 5
    text: str
    service: str = ""
    date: str = ""


# ---------------- Seed data ----------------
SEED_VERSION = 2

SEED_REVIEWS = [
    {"name": "Sarah M.", "suburb": "Bass Hill, NSW", "rating": 5, "service": "Split System Installation",
     "text": "SplitsPro took the time to understand our home before recommending anything. The Daikin split they installed is beautifully finished and whisper quiet. Genuine craftsmen.", "date": "2025-11-02"},
    {"name": "James T.", "suburb": "Parramatta, NSW", "rating": 5, "service": "Ducted Air Conditioning",
     "text": "Full ducted Mitsubishi Electric system through our two-storey home. Every zone was planned carefully and the finish is immaculate. You can tell they care about the detail.", "date": "2025-10-18"},
    {"name": "Priya K.", "suburb": "Bankstown, NSW", "rating": 5, "service": "Air Conditioner Cleaning",
     "text": "Booked a clean and service before summer. Professional, tidy and honest — our older unit runs like new. Couldn't recommend them more highly.", "date": "2025-09-30"},
    {"name": "Daniel R.", "suburb": "Revesby, NSW", "rating": 5, "service": "Emergency Air Conditioning",
     "text": "Called on a 40 degree day when our system failed. Same-day response and cool again by evening. Calm, respectful and thorough. Absolute professionals.", "date": "2025-12-01"},
    {"name": "Olivia W.", "suburb": "Liverpool, NSW", "rating": 5, "service": "Air Conditioner Replacement",
     "text": "Replaced a tired old unit with a quiet Fujitsu. Honest advice, no pressure and a spotless clean-up. This is how a premium trade should operate.", "date": "2025-11-20"},
    {"name": "Michael C.", "suburb": "Fairfield, NSW", "rating": 5, "service": "Split System Installation",
     "text": "Two rooms done in an afternoon. Transparent pricing and genuinely premium workmanship. Already booked them for our office.", "date": "2025-10-05"},
    {"name": "Emma L.", "suburb": "Granville, NSW", "rating": 5, "service": "Air Conditioning Repairs",
     "text": "Diagnosed a fault two other companies missed and fixed it properly first time. Communication was excellent throughout. Trustworthy and skilled.", "date": "2025-08-22"},
    {"name": "Tom H.", "suburb": "Guildford, NSW", "rating": 5, "service": "Commercial Air Conditioning",
     "text": "Fitted out our cafe with a commercial system. Minimal disruption, on schedule and beautifully finished. The space is comfortable all day now.", "date": "2025-09-11"},
]

SEEDED = False


async def seed_reviews():
    global SEEDED
    if SEEDED:
        return
    meta = await db.meta.find_one({"key": "reviews_seed"})
    current = meta.get("version") if meta else 0
    if current != SEED_VERSION:
        await db.reviews.delete_many({})
        docs = [Review(**r).model_dump() for r in SEED_REVIEWS]
        await db.reviews.insert_many(docs)
        await db.meta.update_one({"key": "reviews_seed"}, {"$set": {"version": SEED_VERSION}}, upsert=True)
        logging.info("(Re)seeded %d reviews at version %d", len(docs), SEED_VERSION)
    SEEDED = True


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"message": "SplitsPro API"}


@api_router.post("/quotes", response_model=Quote)
async def create_quote(payload: QuoteCreate):
    quote = Quote(**payload.model_dump())
    await db.quotes.insert_one(quote.model_dump())
    logging.info("New quote lead from %s (%s)", quote.name, quote.suburb)
    return quote


@api_router.get("/quotes", response_model=List[Quote])
async def list_quotes():
    docs = await db.quotes.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Quote(**d) for d in docs]


@api_router.get("/reviews", response_model=List[Review])
async def list_reviews():
    await seed_reviews()
    docs = await db.reviews.find({}, {"_id": 0}).to_list(1000)
    return [Review(**d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup():
    await seed_reviews()


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
