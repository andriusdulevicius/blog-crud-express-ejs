const express = require('express');
const router = express.Router();
const blogs = require('../../data/blogDb');

//blog API   /api/blog gauti visus postus json pavidalu
router.get('/api/blog', (req, res) => {
  res.json(blogs);
});

module.exports = router;
