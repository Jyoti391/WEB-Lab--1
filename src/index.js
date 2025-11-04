const express = require('express');
const app = express();
const port = 3000;

const taskRoutes = require('./routes/tasks');

app.use(express.json());
app.use('/', taskRoutes); // use router at root

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
