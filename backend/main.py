from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="ApexForm Architects API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Inquiry(BaseModel):
    name: str
    email: str
    phone: str
    service: str
    message: str

@app.post("/api/inquire")
async def handle_inquiry(inquiry: Inquiry):
    """
    Handle incoming contact forms from the frontend.
    """
    # Simulate saving to database or sending an email
    print(f"Received inquiry from {inquiry.name} ({inquiry.email}) regarding {inquiry.service}.")
    print(f"Message: {inquiry.message}")
    
    return {"status": "success", "message": "Inquiry received successfully."}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
