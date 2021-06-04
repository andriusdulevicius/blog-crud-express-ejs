const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');
const ownerControllers = require('../controllers/ownersController');
//arba {owners_index}

//get owners        //cia skliausteliu nereikia nes nurodome nuoroda i funkcija, bet jos dar nevykdom
router.get('/', ownerControllers.owners_index);

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
//formos action dalyje nurodytas kelias kur keliauti , turi buti cia toks pat post dalyje, nes siuo adresu nukeliavus , bus atlikti tolimesni veiksmai

router.post('/edit/:id', (req, res) => {
  Owner.findByIdAndUpdate(req.params.id, req.body)

    .then((result) => {
      res.redirect('/owners?msg=edited&name=' + result.name);
    })
    .catch((err) => console.warn(err));
});

module.exports = router;
