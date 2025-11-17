const express = require('express');
const app = express();

// import router
const tasksRouter = require('./routes/tasks'); // <-- correct path

// JSON parsing middleware
app.use(express.json());

// Mount router
app.use('/tasks', tasksRouter); // <-- Mount at /tasks

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
