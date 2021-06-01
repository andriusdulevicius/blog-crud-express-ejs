import MyFetch from './class/MyFetch.class.js';

const submitBtn = document.querySelector('.btn-primary');

MyFetch.getPosts()
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));

const newPostData = {
  title: 'New Post',
  author: 'pedalas pedalovicius',
  body: 'blah blah blah this is a lot of text',
};
const jsonData = JSON.stringify(newPostData);

MyFetch.createPost(jsonData, (data) => {
  data.redirect ? (window.location = data.redirect) : null;
});
