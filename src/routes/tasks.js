const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
];

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

module.exports = router;
