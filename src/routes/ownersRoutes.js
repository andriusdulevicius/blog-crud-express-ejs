const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

//get owners
router.get('/', (req, res) => {
  // was there a delete
  console.log(' req.query', req.query);
  const feedback = req.query;

  // get all owners from db
  Owner.find()
    .sort({ createdAt: -1 }) //isrikiuoja pagal sukurimo laika
    .then((result) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        result,
        feedback,
      });
    })
    .catch((err) => console.error(err.message));
});

//get single owner
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
  newOwner
    .save()
    .then((result) => {
      res.redirect('/owners?msg=created&name=' + result.name);
    })
    .catch((err) => res.send('Opps did not save', err));
});

// delete form
router.post('/delete/:id', (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/owners?msg=deleted&name=' + result.name))
    .catch((err) => res.send(`delete failed ${err}`));
});

//edit form

router.get('/edit/:id', (req, res) => {
  const blogId = req.params.id;
  Owner.findById(blogId).then((result) =>
    res.render('owners/edit', {
      title: 'Edit post',
      page: 'owners_edit',
      result,
      blogId,
    })
  );
});

//edit apdorojimo route

router.post('/edit/:id', (req, res) => {
  Owner.findByIdAndUpdate(req.params.id, req.body)

    .then((result) => {
      res.redirect('/owners?msg=edited&name=' + result.name);
    })
    .catch((err) => console.warn(err));
});

module.exports = router;
