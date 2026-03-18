# MedTech Skin AI

KI-gestützte Hautkrebsfrüherkennung - MVP Prototyp

## Setup

### Frontend (Next.js)

```bash
cd medtech-skin-ai
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

For real AI analysis, set your HuggingFace token in `backend/.env`:
```
HF_TOKEN=your_token_here
```

Without HF_TOKEN, the app runs in demo mode with simulated results.

### Docker (Backend)

```bash
cd backend
docker build -t medtech-skin-ai-backend .
docker run -p 8000:8000 -e HF_TOKEN=your_token medtech-skin-ai-backend
```

## Architecture

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Backend**: FastAPI + HuggingFace Inference API
- **Model**: Anwarkh1/Skin_Cancer-Image_Classification

## Disclaimer

This application is for informational purposes only and does not replace professional medical diagnosis. Always consult a dermatologist.
