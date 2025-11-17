const express = require('express');
const router = express.Router();

// GET /tasks - Return 5 tasks
router.get('/', (req, res) => {

  const tasks = [
    {
      id: 1,
      title: "Learn REST API",
      completed: false,
      priority: "high",
      createdAt: new Date()
    },
    {
      id: 2,
      title: "Complete Lab Report",
      completed: false,
      priority: "medium",
      createdAt: new Date()
    },
    {
      id: 3,
      title: "Practice Express Router",
      completed: true,
      priority: "low",
      createdAt: new Date()
    },
    {
      id: 4,
      title: "Watch JavaScript Tutorial",
      completed: false,
      priority: "high",
      createdAt: new Date()
    },
    {
      id: 5,
      title: "Submit Assignment",
      completed: true,
      priority: "medium",
      createdAt: new Date()
    }
  ];

  res.status(200).json({
    success: true,
    data: tasks
  });
});

module.exports = router;
