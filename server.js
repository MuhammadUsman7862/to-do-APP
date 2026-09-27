const express = require('express');
const cors = require('cors');

const app = express();

// Let the app understand JSON sent in request bodies (like body: JSON.stringify(...))
app.use(express.json());

// Allow the React dev server to talk to this API
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
}));

// Simple in-memory storage (data resets when the server restarts)
let todos = [];
let idCounter = 1;

app.get('/', (req, res) => {
  res.json({ message: 'Todo API is running' });
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "number") {
    return res.status(422).json({ detail: 'title is required and must be a string' });
  }

  const newTodo = { id: idCounter++, title, completed: false };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ detail: 'Todo not found' });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const index = todos.findIndex((t) => t.id === todoId);

  if (index === -1) {
    return res.status(404).json({ detail: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.json({ message: 'Deleted' });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Todo API running at http://127.0.0.1:${PORT}`);
});