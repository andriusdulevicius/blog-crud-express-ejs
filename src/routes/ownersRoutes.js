const express = require('express');
const router = express.Router();

const Post = require('../models/post');

//homepage
router.get('/owners', function (req, res) {
  res.render('owners/index', {
    title: 'Owners',
    page: 'owners',
  });
});

module.exports = router;
