const express = require('express');
const app = express();
const blogData = require('./data/sampleBlog.js');
const blogs = require('./data/blogDb');
const path = require('path');
const router = express.Router();

const PORT = 3000;

//register view engine
app.set('view engine', 'ejs');
//render views home dir
app.set('views', 'src/views');

//homepage
app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'index.html'));

  //atvaizduojame puslapi
  res.render('index', {
    title: 'Home',
    page: 'home',
    blogData,
  });
});

//about page
app.get('/about', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'about.html'));
  res.render('about', {
    title: 'About Us',
    page: 'about',
  });
});
app.get('/contact', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
  res.render('contact', {
    title: 'Contact Us',
    page: 'contact',
  });
});

//blogs page
app.get('/blogs', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
  res.render('blogs', {
    title: 'Blog',
    page: 'blog',
    blogs,
  });
});
//
//create blog page  /blog/create
app.get('/blog/create', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
  res.render('createBlog', {
    title: 'Create Blog',
    page: 'createB',
  });
});

const staticPath = path.join(__dirname, 'static');
//statine direktorija, css, js , imgs ir kt statiniam failam
app.use(express.static(staticPath));

//blog API   /api/blog gauti visus postus json pavidalu

//404 case , kai vartotojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('Ops , page not found'));

app.listen(PORT);
