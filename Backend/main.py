from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.message import EmailMessage

app = FastAPI()

# Configure CORS to allow the React frontend to communicate with this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"], # Common React/Vite ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data structure we expect from React
class Transmission(BaseModel):
    sender_email: str
    message_data: str

@app.post("/api/contact")
async def process_transmission(data: Transmission):
    """
    Receives the transmission from the frontend and processes it.
    """
    # ---------------------------------------------------------
    # TERMINAL LOGGING (For your local development)
    # ---------------------------------------------------------
    print("\n> [INCOMING TRANSMISSION DETECTED]")
    print(f"> SENDER: {data.sender_email}")
    print(f"> MESSAGE: {data.message_data}")
    print("> [END TRANSMISSION]\n")

    # ---------------------------------------------------------
    # PRODUCTION EMAIL LOGIC (Uncomment and configure for live)
    # ---------------------------------------------------------
    
    try:
        msg = EmailMessage()
        msg.set_content(f"Message from: {data.sender_email}\n\n{data.message_data}")
        msg['Subject'] = "New Portfolio Transmission"
        msg['From'] = "your-server-email@wasteland.com"
        msg['To'] = "johny7571@gmail.com"

        # Example using a standard SMTP server (like Gmail App Passwords or SendGrid)
        server = smtplib.SMTP('smtp.example.com', 587)
        server.starttls()
        server.login("your-username", "your-secure-password")
        server.send_message(msg)
        server.quit()
    except Exception as e:
        raise HTTPException(status_code=500, detail="Transmission failed to relay.")
    

    return {"status": "success", "message": "Transmission relayed successfully."}

# To run this server, execute this in your terminal:
# uvicorn main:app --reload