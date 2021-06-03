const express = require('express');
const router = express.Router();
// const blogs = require('../../data/blogDb');

router.use(express.json());

const Owner = require('../../models/owner');

router.post('/', (req, res) => {
  //sukuriam nauja posta pagal post.js sukurta modeli
  const newOwner = new Owner(req.body);

  //kad issaugoti duomenu bazeje naudojam .save() metoda
  newOwner
    .save() //issaugom duomenis , kadangi asinchronine funkcija, reikia then
    .then(() => res.json({ msg: 'success', redirect: '/owners' }))
    .catch((err) => console.error(err));
});

module.exports = router;
