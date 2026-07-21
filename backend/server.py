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
SEED_REVIEWS = [
    {"name": "Sarah M.", "suburb": "Bondi, NSW", "rating": 5, "service": "Split System Installation",
     "text": "SplitsPro installed a Daikin split in our bedroom and the finish is immaculate. Punctual, tidy and the quote was exactly what we paid. Highly recommend.", "date": "2025-11-02"},
    {"name": "James T.", "suburb": "Parramatta, NSW", "rating": 5, "service": "Ducted Installation",
     "text": "Full ducted Mitsubishi Electric system through our two-storey home. The team mapped every zone perfectly and the house is now beautifully even. Faultless job.", "date": "2025-10-18"},
    {"name": "Priya K.", "suburb": "Chatswood, NSW", "rating": 5, "service": "AC Servicing",
     "text": "Booked a service and clean before summer. Technician was professional, explained everything and our old unit runs like new. Great value.", "date": "2025-09-30"},
    {"name": "Daniel R.", "suburb": "Cronulla, NSW", "rating": 5, "service": "Emergency AC",
     "text": "Called on a 40 degree day when our system died. They came out same day and had us cool again by evening. Absolute lifesavers.", "date": "2025-12-01"},
    {"name": "Olivia W.", "suburb": "Manly, NSW", "rating": 5, "service": "AC Replacement",
     "text": "Replaced a 15 year old unit with a quiet Fujitsu. Honest advice, no upsell, and a spotless clean-up. This is how a trade should be run.", "date": "2025-11-20"},
    {"name": "Michael C.", "suburb": "Penrith, NSW", "rating": 5, "service": "Split System Replacement",
     "text": "Two rooms done in an afternoon. The pricing was transparent and the workmanship is genuinely premium. Will use again for our office.", "date": "2025-10-05"},
    {"name": "Emma L.", "suburb": "Newtown, NSW", "rating": 5, "service": "AC Repairs",
     "text": "Diagnosed a fault three other companies missed. Fixed it properly the first time. Communication was excellent throughout.", "date": "2025-08-22"},
    {"name": "Tom H.", "suburb": "Hornsby, NSW", "rating": 5, "service": "Commercial AC",
     "text": "Fitted out our cafe with a commercial system. Minimal disruption, on schedule and the space is comfortable all day now. Brilliant work.", "date": "2025-09-11"},
]

SEEDED = False


async def seed_reviews():
    global SEEDED
    if SEEDED:
        return
    count = await db.reviews.count_documents({})
    if count == 0:
        docs = [Review(**r).model_dump() for r in SEED_REVIEWS]
        await db.reviews.insert_many(docs)
        logging.info("Seeded %d reviews", len(docs))
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
