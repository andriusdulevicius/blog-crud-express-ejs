const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;
//homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

//about page
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

//blogs page
app.get('/blogs', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
});

const staticPath = path.join(__dirname, 'static');
//statine direktorija, css, js , imgs ir kt statiniam failam
app.use(express.static(staticPath));

//404 case , kai vartotojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('Ops , page not found'));

app.listen(PORT);
