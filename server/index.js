// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import method routers
const getDataRouter = require('./srcs/getData');
const updateDataRouter = require('./srcs/updateData');

// Use the routers for the GET and PUT routes
app.use('/api', getDataRouter);   // Available at /api/data
app.use('/api', updateDataRouter); // Avaliable at /api/data

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
