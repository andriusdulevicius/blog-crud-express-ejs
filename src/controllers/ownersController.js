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

const owners_single = (req, res) => {
  const blogId = req.params.id;
  Owner.findById(blogId).then((result) =>
    res.render('owners/view', {
      title: 'single post',
      page: 'owners_single',
      result,
      blogId,
    })
  );
};

module.exports = {
  owners_index,
  owners_single,
};
