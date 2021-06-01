const express = require('express');
const router = express.Router();
const blogs = require('../data/blogDb');

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
  // res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
  res.render('blogs', {
    title: 'Blog',
    page: 'blog',
    blogs,
  });
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
  const found = blogs.find((b) => b.id === +blogId);
  console.log(found);

  res.render('singlePage', {
    title: 'single post',
    page: 'single',
    post: found,
  });
});

module.exports = router;
