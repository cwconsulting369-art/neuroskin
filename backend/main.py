from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
import random

app = FastAPI(title="MedTech Skin AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/analyze")
async def analyze_skin(file: UploadFile = File(...)):
    image_data = await file.read()

    hf_token = os.getenv("HF_TOKEN", "")

    if hf_token:
        try:
            headers = {"Authorization": f"Bearer {hf_token}"}
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    "https://api-inference.huggingface.co/models/Anwarkh1/Skin_Cancer-Image_Classification",
                    headers=headers,
                    content=image_data,
                    timeout=30.0,
                )
                if response.status_code == 200:
                    results = response.json()
                    if isinstance(results, list) and len(results) > 0:
                        top = results[0]
                        label = top.get("label", "").lower()
                        score = top.get("score", 0.5)

                        malignant_labels = [
                            "melanoma",
                            "squamous cell carcinoma",
                            "basal cell carcinoma",
                        ]
                        suspicious_labels = [
                            "actinic keratosis",
                            "seborrheic keratosis",
                        ]

                        if any(m in label for m in malignant_labels) and score > 0.6:
                            risk = "hohes_risiko"
                        elif (
                            any(s in label for s in suspicious_labels) or score < 0.7
                        ):
                            risk = "verdächtig"
                        else:
                            risk = "gutartig"

                        return {
                            "result": risk,
                            "confidence": round(score, 2),
                            "details": f"Klassifiziert als: {top.get('label', 'Unbekannt')}",
                            "model": "Anwarkh1/Skin_Cancer-Image_Classification",
                        }
        except Exception:
            pass

    # Demo fallback
    risk_options = [
        {
            "result": "gutartig",
            "confidence": 0.87,
            "details": "Keine auffälligen Merkmale erkannt (Demo-Modus)",
        },
        {
            "result": "verdächtig",
            "confidence": 0.71,
            "details": "Unregelmäßige Pigmentierung erkannt - Arzt empfohlen (Demo-Modus)",
        },
        {
            "result": "hohes_risiko",
            "confidence": 0.83,
            "details": "Stark auffällige Merkmale erkannt - sofort Dermatologen aufsuchen (Demo-Modus)",
        },
    ]
    result = random.choice(risk_options)
    result["model"] = "demo"
    return result


@app.get("/health")
async def health():
    return {"status": "ok", "service": "MedTech Skin AI"}
