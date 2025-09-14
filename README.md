# Medicura-AI 🚑 — TiDB AgentX Hackathon 2025 Submission

## 📖 Project Overview

**Medicura-AI** is a medical copilot designed to streamline healthcare workflows by leveraging **TiDB Serverless** for vector + full-text search, integrated with **AWS Bedrock LLMs** for intelligent, multi-step agentic solutions.

The system ingests medical data (e.g., symptom descriptions, patient records) into TiDB, performs **vector similarity searches**, and chains **LLM reasoning** to provide actionable insights such as:

* Symptom analysis
* Specialist recommendations
* Medical report summaries

This project aligns with the TiDB AgentX Hackathon 2025 theme — *"Forge Agentic AI for Real-World Impact"* — by delivering a **scalable, real-time medical assistant** for healthcare professionals and patients.

---

## ✨ Features

* **📥 Data Ingestion:** Store structured/unstructured medical data in TiDB Serverless using vector + full-text indexes.
* **🔍 Vector Search:** Match symptoms or queries with relevant medical knowledge bases.
* **🤖 LLM Integration:** Chain AWS Bedrock LLMs for multi-step reasoning (summaries, recommendations, follow-ups).
* **⚡ FastAPI Backend:** RESTful API for TiDB queries + LLM interaction.
* **💻 Frontend (optional):** React + Tailwind CSS interface for user-friendly interaction.
* **🌍 Real-World Impact:** Rapid, accurate insights for professionals and accessible health guidance for patients.

---

## 🛠 Tech Stack

* **Backend:** Python, FastAPI, TiDB Serverless, AWS Bedrock LLMs
* **Frontend (optional):** React, Tailwind CSS
* **Database:** TiDB Cloud Serverless
* **Other Tools:** Docker (deployment), Git

---

## 📋 Prerequisites

* Python **3.9+**
* Node.js **18+** (if using frontend)
* Git
* TiDB Cloud account → [https://tidbcloud.com](https://tidbcloud.com)
* AWS Bedrock credentials
* *(Optional)* Docker

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/medicura-ai.git
cd medicura-ai
```

### 2. Backend Setup

```bash
pip install -r backend/requirements.txt
```

Key deps: `fastapi`, `pydantic`, `sqlalchemy`, `mysql-connector-python`, `boto3`

Create `.env` in `backend/`:

```ini
TIDB_HOST=your-tidb-host
TIDB_USER=your-tidb-user
TIDB_PASSWORD=your-tidb-password
TIDB_DATABASE=medicura
```

Initialize DB:

```bash
python backend/init_db.py
```

### 3. (Optional) Frontend Setup

```bash
cd frontend
npm install
```

Update `frontend/src/config.js` with backend API endpoint.

### 4. Run Project

**Backend:**

```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

API docs → `http://localhost:8000/docs`

**Frontend (if enabled):**

```bash
cd frontend
npm run build
npm start
```

App → `http://localhost:3000`

### 5. (Optional) Docker

```bash
docker build -t medicura-ai .
docker run -p 8000:8000 --env-file backend/.env medicura-ai
```

---

## 🚀 Usage

* **Ingest Data:**

```http
POST /ingest {"symptoms": "fever, cough", "patient_id": "123"}
```

* **Query Copilot:**

```http
POST /query {"query": "What conditions match fever and cough?"}
```

* **Frontend (if enabled):** open `http://localhost:3000`

---

## 🔗 TiDB Integration

* **Vector Search:** Store embeddings in TiDB for symptom matching.
* **Full-Text Search:** Query medical terms/diagnoses quickly.
* **Multi-Step Agent:** Combine TiDB results + LLM reasoning for contextual insights.

---

## 🏆 Hackathon Judging Criteria

* **Innovation (35%)** → Medical copilot automating healthcare workflows.
* **Tech Implementation (35%)** → TiDB vector/full-text + AWS Bedrock LLM integration.
* **Impact (20%)** → Improves accessibility & decision-making.
* **Presentation (10%)** → Clear docs, intuitive UI, clean repo.

---

## 📬 Contact

📧 \[[your-email@example.com](mailto:your-email@example.com)]
💻 GitHub Issues → project repo

---

✅ Thank you for reviewing **Medicura-AI** — built for the **TiDB AgentX Hackathon 2025**!
