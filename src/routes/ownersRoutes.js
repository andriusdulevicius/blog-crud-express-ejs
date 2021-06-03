const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

//get owners
router.get('/', (req, res) => {
  res.render('owners/index', {
    title: 'Owners',
    page: 'owners',
  });
});
//add new owner
router.get('/new', (req, res) => {
  //get tai ka ivedam i adresa, o render kelias iki failo su ejs galune

  //sukurti 3 ownerius:
  const owners = [
    { name: 'James', email: 'james@gmail.com' },
    { name: 'Jane', email: 'Jane@gmail.com' },
    { name: 'Brad', email: 'Brad@gmail.com' },
  ];

  const newOwner = new Owner({ name: 'James', email: 'james@gmail.com' });

  newOwner
    .save()
    .then((result) => {
      res.render('owners/new', {
        title: 'Add owner',
        page: 'owners_new',
      });
    })
    .catch((err) => console.warn(err));
});

//edit owner
router.get('/edit', (req, res) => {
  //get tai ka ivedam i adresa, o render kelias iki failo su ejs galune
  res.render('owners/edit', {
    title: 'Edit owner',
    page: 'owners_edit',
  });
});

module.exports = router;
