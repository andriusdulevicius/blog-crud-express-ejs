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

const owners_form = (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
};

const owners_form_post = (req, res) => {
  const newOwner = new Owner(req.body);
  newOwner
    .save()
    .then((result) => {
      res.redirect('/owners?msg=created&name=' + result.name);
    })
    .catch((err) => res.send('Opps did not save', err));
};

const owner_delete = (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/owners?msg=deleted&name=' + result.name))
    .catch((err) => res.send(`delete failed ${err}`));
};

const owner_edit_form = (req, res) => {
  const blogId = req.params.id;
  Owner.findById(blogId).then((result) =>
    res.render('owners/edit', {
      title: 'Edit post',
      page: 'owners_edit',
      result,
      blogId,
    })
  );
};

const owner_edit_post = (req, res) => {
  Owner.findByIdAndUpdate(req.params.id, req.body)

    .then((result) => {
      res.redirect('/owners?msg=edited&name=' + result.name);
    })
    .catch((err) => console.warn(err));
};

module.exports = {
  owners_index,
  owners_single,
  owners_form,
  owners_form_post,
  owner_delete,
  owner_edit_form,
  owner_edit_post,
};
