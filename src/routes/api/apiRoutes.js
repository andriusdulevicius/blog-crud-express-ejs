const express = require('express');
const router = express.Router();
// const blogs = require('../../data/blogDb');

router.use(express.json());

const Post = require('../../models/post');

router.post('/', (req, res) => {
  // const { title, author, body } = req.body;
  //sukuriam nauja posta pagal post.js sukurta modeli
  const newPost = new Post(
    req.body
    //   {
    //   title,
    //   author,
    //   body,
    // }
  );

  //kad issaugoti duomenu bazeje naudojam .save() metoda
  newPost
    .save() //issaugom duomenis , kadangi asinchronine funkcija, reikia then
    .then(() => res.json({ msg: 'success', redirect: '/blogs' }))
    .catch((err) => console.error(err));
});

router.delete('/:id', (req, res) => {
  Post.deleteOne(req.body)
    .then((result) => {
      res.json({ msg: 'success', redirect: '/blogs' });
    })
    .catch((err) => console.warn(err));
});

router.put('/:id', (req, res) => {
  Post.updateOne(req.body)
    .then((result) => {
      res.json({ msg: 'success', redirect: '/blogs' });
    })
    .catch((err) => console.warn(err));
});

module.exports = router;
