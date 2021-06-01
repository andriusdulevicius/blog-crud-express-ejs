const express = require('express');
const router = express.Router();
// const blogs = require('../../data/blogDb');

router.use(express.json());

const Post = require('../../models/post');

router.get('/blog/create', (req, res) => {
  const { title, author, body } = req.body;
  //sukuriam nauja posta pagal post.js sukurta modeli
  const newPost = new Post({
    title,
    author,
    body,
  });
  //kad issaugoti duomenu bazeje naudojam .save() metoda
  newPost
    .save() //issaugom duomenis , kadangi asinchronine funkcija, reikia then
    .then((result) => res.send(result))
    .catch((err) => console.error(err));

  // blogs.push(newBlog);
  // res.json({ msg: 'success', redirect: '/blogs'});
});

module.exports = router;
