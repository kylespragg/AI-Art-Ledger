// updateData.js

const express = require('express');
const router = express.Router(); // Create a router

// Sample data
let data = {
  message: "Hello World!"
};

// PUT method to update the data
router.put('/data', (req, res) => {
  const { message } = req.body;

  if (message) {
    data.message = message;
    res.json({
      success: true,
      message: 'Data updated successfully',
      data: data
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Invalid data, "message" is required'
    });
  }
});

module.exports = router; // Export the router
