// getData.js

const express = require('express');
const router = express.Router(); // Create a router

// Sample data
let data = {
  message: "Hello World!"
};

// GET method to return the data
router.get('/data', (req, res) => {
  res.json({
    success: true,
    data: data
  });
});

module.exports = router; // Export the router
