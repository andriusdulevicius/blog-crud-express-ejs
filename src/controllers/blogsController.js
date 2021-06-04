const Post = require('../models/post');

const blogs_page = (req, res) => {
  Post.find()
    .then((result) => {
      res.render('blog/blogs', {
        title: 'Blog',
        page: 'blog',
        blogs: result,
      });
    })
    .catch((err) => console.error(err.message));
};

const blog_create_page = (req, res) => {
  // res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
  res.render('blog/createBlog', {
    title: 'Create Blog',
    page: 'createB',
  });
};

const blog_single = (req, res) => {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) =>
    res.render('blog/singlePage', {
      title: 'single post',
      page: 'single',
      result,
      blogId,
    })
  );
};

const blog_edit_page = (req, res) => {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) => {
    res.render('blog/singlePageEdit', {
      title: 'Edit',
      page: 'edit',
      result,
      blogId,
    });
  });
};

module.exports = {
  blogs_page,
  blog_create_page,
  blog_single,
  blog_edit_page,
};
