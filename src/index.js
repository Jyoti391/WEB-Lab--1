
const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  { id: 1, title: 'Setup project repo', completed: false, priority: 'high',   createdAt: new Date('2025-11-01T09:00:00Z') },
  { id: 2, title: 'Implement auth', completed: false, priority: 'medium', createdAt: new Date('2025-11-02T11:30:00Z') },
  { id: 3, title: 'Write unit tests', completed: true,  priority: 'low',    createdAt: new Date('2025-10-28T14:15:00Z') },
  { id: 4, title: 'Create UI mockups', completed: false, priority: 'medium', createdAt: new Date('2025-10-30T08:45:00Z') },
  { id: 5, title: 'Prepare deployment', completed: true,  priority: 'high',   createdAt: new Date('2025-10-31T16:00:00Z') }
];

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

