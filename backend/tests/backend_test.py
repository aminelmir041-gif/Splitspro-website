"""Backend tests for SplitsPro API (iteration 2)."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback: read directly from /app/frontend/.env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break

API = f"{BASE_URL}/api"

WESTERN_SYDNEY = {
    "Bass Hill", "Bankstown", "Chester Hill", "Guildford", "Granville",
    "Fairfield", "Liverpool", "Parramatta", "Panania", "Revesby",
}

OLD_EASTERN = {"Bondi", "Manly", "Cronulla", "Coogee", "Randwick"}


@pytest.fixture(scope="module")
def s():
    sess = requests.Session()
    sess.headers.update({"Content-Type": "application/json"})
    return sess


# ---- Health ----
def test_api_root(s):
    r = s.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


# ---- Reviews (SEED_VERSION=2 -> Western Sydney) ----
def test_reviews_returns_8_and_western_sydney(s):
    r = s.get(f"{API}/reviews")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    assert len(data) == 8, f"Expected 8 seeded reviews, got {len(data)}"

    suburbs_text = " ".join(rv.get("suburb", "") for rv in data)
    # Must contain at least a few Western Sydney suburbs
    hits = sum(1 for w in WESTERN_SYDNEY if w in suburbs_text)
    assert hits >= 4, f"Expected several Western Sydney suburbs, got only {hits} in: {suburbs_text}"
    # Must not contain old eastern suburbs
    for old in OLD_EASTERN:
        assert old not in suburbs_text, f"Old suburb {old} still present in reviews (re-seed failed)"

    # Validate review shape
    for rv in data:
        assert rv.get("name")
        assert rv.get("suburb")
        assert rv.get("text")
        assert rv.get("rating") == 5


# ---- Quote create (valid) ----
def test_create_quote_valid(s):
    payload = {
        "name": "TEST Alice",
        "phone": "0414123456",
        "suburb": "Bankstown",
        "service": "Split System Installation",
        "message": "Two bedrooms",
    }
    r = s.post(f"{API}/quotes", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["phone"] == payload["phone"]
    assert data["suburb"] == payload["suburb"]
    assert data["service"] == payload["service"]
    assert data["message"] == payload["message"]
    assert isinstance(data.get("id"), str) and len(data["id"]) > 8
    assert "created_at" in data

    # Persistence check
    r2 = s.get(f"{API}/quotes")
    assert r2.status_code == 200
    ids = [q["id"] for q in r2.json()]
    assert data["id"] in ids


def test_create_quote_valid_minimal_no_message(s):
    payload = {
        "name": "TEST Bob",
        "phone": "02 9876 5432",
        "suburb": "Parramatta",
        "service": "Ducted Air Conditioning",
    }
    r = s.post(f"{API}/quotes", json=payload)
    assert r.status_code == 200, r.text
    assert r.json()["message"] == ""


# ---- Quote create (invalid) ----
def test_create_quote_empty_body(s):
    r = s.post(f"{API}/quotes", json={})
    assert r.status_code == 422


def test_create_quote_short_phone(s):
    payload = {
        "name": "TEST Carol",
        "phone": "123",
        "suburb": "Liverpool",
        "service": "Air Conditioning Repairs",
    }
    r = s.post(f"{API}/quotes", json=payload)
    assert r.status_code == 422
    # Should mention phone validation
    body = r.json()
    assert "phone" in str(body).lower()


def test_create_quote_blank_name(s):
    payload = {
        "name": "   ",
        "phone": "0414987654",
        "suburb": "Fairfield",
        "service": "Air Conditioner Cleaning",
    }
    r = s.post(f"{API}/quotes", json=payload)
    assert r.status_code == 422


# ---- List quotes ----
def test_list_quotes_contains_test_lead(s):
    # Create a lead then list
    payload = {
        "name": "TEST Persistence Check",
        "phone": "0414 555 111",
        "suburb": "Revesby",
        "service": "Air Conditioner Cleaning",
    }
    c = s.post(f"{API}/quotes", json=payload)
    assert c.status_code == 200
    lead_id = c.json()["id"]

    r = s.get(f"{API}/quotes")
    assert r.status_code == 200
    quotes = r.json()
    assert any(q["id"] == lead_id and q["suburb"] == "Revesby" for q in quotes)
