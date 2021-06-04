//owners_index owners_single

const Owner = require('../models/owner');

const owners_index = (req, res) => {
  const feedback = req.query;

  // get all owners from db
  Owner.find()
    .sort({ updatedAt: -1 }) //isrikiuoja pagal sukurimo laika
    .then((result) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        result,
        feedback,
      });
    })
    .catch((err) => console.error(err.message));
};

module.exports = {
  owners_index,
};
