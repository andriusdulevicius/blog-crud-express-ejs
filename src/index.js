const express = require('express');
const app = express();

const { mongoDbString } = require('./config/config');

const path = require('path');

const PORT = 3000;

const pagesRoutes = require('./routes/pagesRoutes');
const apiRoutes = require('./routes/api/apiRoutes');

//susiinstaliuojam mongoose , npm install mongoose
//isitraukiam mongoose paketa
const mongoose = require('mongoose');
//prisijungiam prie duomenu bazes

mongoose
  .connect(mongoDbString, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongoose');
    app.listen(PORT);
  })
  .catch((err) => console.error(err));

//register view engine
app.set('view engine', 'ejs');
//render views home dir
app.set('views', 'src/views');

//for req.body to work
app.use(express.json());

//pages routes
app.use('/', pagesRoutes);

const staticPath = path.join(__dirname, 'static');
//statine direktorija, css, js , imgs ir kt statiniam failam
app.use(express.static(staticPath));

//isitraukti API route ir panaudoti cia , kad veiktu
app.use('/api/blog', apiRoutes);

//404 case , kai vartotojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('Ops , page not found'));
