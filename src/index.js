const express = require('express');
const app = express();

const path = require('path');

const PORT = 3000;

const pagesRoutes = require('./routes/pagesRoutes');
const apiRoutes = require('./routes/api/apiRoutes');

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

app.listen(PORT);
