const express = require('express');
const router = express.Router();

const Post = require('../models/post');
const blogControllers = require('../controllers/blogsController');

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
router.get('/blogs', blogControllers.blogs_page);
//

//create blog page  /blog/create
router.get('/blog/create', blogControllers.blog_create_page);

//single page route
router.get('/single/:id', blogControllers.blog_single);

//edit page route
router.get('/single/edit/:id', blogControllers.blog_edit_page);

module.exports = router;
