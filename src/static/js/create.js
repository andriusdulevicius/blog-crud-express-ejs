import MyFetch from './class/MyFetch.class.js';

const submitBtn = document.querySelector('.btn-primary');
const form = document.getElementById('form');

MyFetch.getPosts()
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));

const newPostData = {
  title: form.data.title,
  author: form.data.author,
  body: form.data.body,
};
const jsonData = JSON.stringify(newPostData);

MyFetch.createPost(jsonData, (data) => {
  data.redirect ? (window.location = data.redirect) : null;
});
