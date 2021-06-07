const house_new = (req, res) => {
  // res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  const ownersId = req.params.ownersId;
  //atvaizduojame puslapi
  res.render('house/new', {
    title: 'Add New house',
    page: 'house',
    ownersId,
  });
};

const house_new_post = (req, res) => {
  const ownersId = req.params.ownersId;

  //sukurti nauja house ir redurectinti i ownerio page
  res.json({ body: req.body, ownersId });
};

module.exports = { house_new, house_new_post };
