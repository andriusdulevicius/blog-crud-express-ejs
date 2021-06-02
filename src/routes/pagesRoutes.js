const express = require('express');
const router = express.Router();

const Post = require('../models/post');

//homepage
router.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'index.html'));

  //atvaizduojame puslapi
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
});

//about page
router.get('/about', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'about.html'));
  res.render('about', {
    title: 'About Us',
    page: 'about',
  });
});

router.get('/contact', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
  res.render('contact', {
    title: 'Contact Us',
    page: 'contact',
  });
});

//blogs page
router.get('/blogs', function (req, res) {
  Post.find()
    .then((result) => {
      res.render('blogs', {
        title: 'Blog',
        page: 'blog',
        blogs: result,
      });
    })
    .catch((err) => console.error(err.message));
});
//

//create blog page  /blog/create
router.get('/blog/create', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
  res.render('createBlog', {
    title: 'Create Blog',
    page: 'createB',
  });
});

//single page route
router.get('/single/:id', function (req, res) {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) =>
    res.render('singlePage', {
      title: 'single post',
      page: 'single',
      result,
    })
  );
});

//deleted page route
router.get('/deleted', function (req, res) {
  //atvaizduojame puslapi
  res.render('deleted', {
    title: 'Deleted',
    page: 'deleted',
  });
});

module.exports = router;
