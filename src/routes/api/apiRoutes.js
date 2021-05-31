const express = require('express');
const router = express.Router();
const blogs = require('../../data/blogDb');
let blogId = 3;
router.use(express.json());
//blog API   /api/blog gauti visus postus json pavidalu
router.get('/', (req, res) => {
  res.json(blogs);
});

router.post('/', (req, res) => {
  console.log(' This is what was sent to server in body', req.body);

  const { title, author, body, date } = req.body;
  if (!req.body.title) {
    res.status(400).json({ error: 'please enter a name' });
    return;
  }

  const newBlog = {
    id: (++blogId).toString(),
    title,
    author,
    body,
    date,
  };
  // res.json({ error: 'please fill in fields' });
  blogs.push(newBlog);
  res.json({ msg: 'success', blogs });
});

module.exports = router;
