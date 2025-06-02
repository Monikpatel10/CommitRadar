# CommitRadar

🚀 CommitRadar is an AI-powered GitHub contribution analyzer that helps developers visualize and explore repository insights using a modern full-stack interface.

## 🔧 Tech Stack

**Frontend:** React.js, JavaScript, HTML/CSS  
**Backend:** FastAPI, Python, REST API  
**Tools:** GitHub API, CORS, Fetch API

## 📦 Features

- 🔍 Search GitHub usernames and fetch live public repositories
- 📊 Display repository names with clean UI and responsive design
- 🔁 FastAPI-powered backend with REST endpoint: `/repos/{username}`

## 🚀 Getting Started

### Backend
```bash
cd backend
pip install fastapi uvicorn requests
uvicorn app.main:app --reload
