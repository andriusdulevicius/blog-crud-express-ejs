const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

//get owners
router.get('/', (req, res) => {
  Owner.find()
    .sort({ createdAt: -1 }) //isrikiuoja pagal sukurimo laika
    .then((result) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        result,
      });
    })
    .catch((err) => console.error(err.message));
});
//formos parodymo route

router.get('/new', (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
});

//formos apdorojimo route
router.post('/new', (req, res) => {
  const newOwner = new Owner(req.body);
  newOwner.save().then((result) => {
    res.redirect('/owners?msg=Success');
  });
});

router.get('/single/:id', (req, res) => {
  const blogId = req.params.id;
  Owner.findById(blogId).then((result) =>
    res.render('owners/view', {
      title: 'single post',
      page: 'owners_single',
      result,
      blogId,
    })
  );
});

module.exports = router;
