const express = require('express');
const router = express.Router();
const blogs = require('/data/blogDb.js');

// get all blogs Endpoint
router.get('/api/blogPosts', (req, res) => res.json(blogs));
// get one blogs Endpoint
router.get('/api/blogPosts/:id', (req, res) => {
  const paramId = req.params.id;

  const found = blogs.find((b) => b.id === paramId);

  if (!found) {
    res.status(404).json({ errorMsg: `sorry blog with id ${paramId} was not found` });
  }

  // grazinam json
  res.json(found);
});

module.exports = router;
