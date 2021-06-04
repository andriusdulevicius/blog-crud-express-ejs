const express = require('express');
const router = express.Router();

const Owner = require('../../models/owner');

//nuejus adresu http://localhost:3000/api/owners/search , gausim json atsakyma   (api/owners nurodyta index.js faile 50 eilutej)
router.get('/search', (req, res) => {
  // const feedback = req.query;

  //   // get all owners from db
  Owner.find()
    .sort({ updatedAt: -1 }) //isrikiuoja pagal sukurimo laika
    .then((result) => {
      res.json({ searching: 'for something' });
    })
    .catch((err) => console.error(err.message));
});

module.exports = router;
