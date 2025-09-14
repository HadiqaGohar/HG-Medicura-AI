# Medicura-AI: TiDB AgentX Hackathon 2025 Submission

## 🚀 Project Overview

Medicura-AI is a **medical domain copilot** designed to streamline healthcare workflows. It leverages **TiDB Serverless** for vector and full-text search, integrates with the **OpenAI Agents SDK** and **Gemini API** for intelligent multi-step reasoning, and uses **MongoDB** + **NextAuth** for secure data management and authentication.

The application ingests medical data (e.g., symptom descriptions, patient records) into TiDB, performs vector similarity searches, and chains LLM calls to provide actionable insights like:

* Symptom analysis
* Medical Term
* Drug Integration
* Triage Agent
* Chatbot
* Specialist recommendations
* Medical report summaries

This aligns with the **TiDB AgentX Hackathon 2025** theme: *"Forge Agentic AI for Real-World Impact"* by creating a real-time, scalable medical assistant.

---

## ✨ Features

* **Data Ingestion**: Store diverse medical data (symptoms, diagnoses, patient records) in TiDB.
* **Vector Search**: Match symptoms/queries with medical knowledge using TiDB’s vector search.
* **Agentic AI**: Multi-step reasoning with OpenAI Agents SDK + Gemini API.
* **Authentication**: NextAuth for secure login and session handling.
* **Database Support**: TiDB (medical data) + MongoDB (user/auth data).
* **Frontend**: React + Tailwind CSS for a simple, intuitive interface.

---

## 🛠 Tech Stack

* **Backend**: Python (FastAPI), TiDB Serverless, MongoDB, OpenAI Agents SDK, Gemini API
* **Frontend**: React, Tailwind CSS
* **Auth**: NextAuth
* **Other Tools**: Docker (optional for deployment), Git

---

## ⚡ Prerequisites

Ensure you have installed:

* **Python 3.9+**
* **Node.js 18+**
* **Git**
* **TiDB Cloud** account → [Free Tier](https://tidbcloud.com)
* **MongoDB Atlas** account
* **Gemini API key**
* **OpenAI Agents SDK key**

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/medicura-ai.git
cd medicura-ai
```

### 2. Backend Setup

Install Python dependencies:

```bash
pip install -r backend/requirements.txt
```

Create a `.env` file in `backend/`:

```env
TIDB_HOST=your-tidb-host
TIDB_USER=your-tidb-user
TIDB_PASSWORD=your-tidb-password
TIDB_DATABASE=medicura

MONGODB_URI=your-mongodb-uri

OPENAI_API_KEY=your-openai-agents-key
GEMINI_API_KEY=your-gemini-api-key

NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```

Initialize TiDB schema:

```bash
python backend/init_db.py
```

Run the backend:

```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

👉 FastAPI will be live at [http://localhost:8000](http://localhost:8000)

---

### 3. Frontend Setup (Optional)

```bash
cd frontend
npm install
```

Update `frontend/src/config.js` with your backend URL.

Run frontend:

```bash
npm run build
npm start
```

👉 Frontend will be live at [http://localhost:3000](http://localhost:3000)
---

## 💡 Usage

* **Ingest Data** → `POST /ingest` with symptoms/patient data
* **Query AI** → `POST /query` with natural language questions
* **Web App** → Interact via frontend UI

---

## 🔗 Hackathon Judging Criteria

* **Innovation (35%)**: A novel medical copilot for healthcare workflows.
* **Tech Implementation (35%)**: TiDB + Vector Search + OpenAI Agents + Gemini.
* **Impact (20%)**: Supports professionals & patients with insights.
* **Presentation (10%)**: Clear docs, intuitive UI, structured code.

---

## 📬 Contact

For questions: **\[[your-email@example.com](mailto:your-email@example.com)]** or open a GitHub Issue.

✨ Thank you for reviewing Medicura-AI for the TiDB AgentX Hackathon 2025!
