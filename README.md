## To-Do App (React + FastAPI)

A simple to-do list app. The frontend is React (built with Vite), and the backend is FastAPI. Tasks are stored in memory on the backend, so they reset whenever you restart the backend server.

## Project structure

```
todo-app/
├── backend/
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       └── App.css
└── README.md
```

### Requirements

- Python 3.9+
- Node.js 18+ (includes npm)

### 1. Run the backend (FastAPI)

Open a terminal in VS Code, then:

```bash
cd todo-app/backend
python -m venv venv
```

Activate the virtual environment:

- **Windows:** `venv\Scripts\activate`
- **Mac/Linux:** `source venv/bin/activate`

Install dependencies and start the server:

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will run at **http://127.0.0.1:8000**. You can check it works by opening that link, or the auto-generated docs at **http://127.0.0.1:8000/docs**.

### 2. Run the frontend (React)

Open a **second** terminal (keep the backend running in the first one):

``bash
cd todo-app/frontend
npm install
npm run dev
```

Vite will print a local URL, usually **http://localhost:5173**. Open that in your browser.

### Using the app

- Type a task and click **Add** to create it.
- Click a task's text to mark it complete/incomplete (it gets a strikethrough).
- Click **Delete** to remove a task.

### Notes

- The frontend expects the backend at `http://127.0.0.1:8000`. If you change the backend port, update `API_URL` in `frontend/src/App.jsx`.
- Data is stored in memory only — restarting the backend clears all tasks. If you want tasks to persist, the next step would be swapping the in-memory list in `backend/main.py` for a real database (e.g. SQLite).
