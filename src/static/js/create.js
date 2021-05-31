import MyFetch from './class/MyFetch.class.js';

const submitBtn = document.querySelector('.btn-primary');

MyFetch.getPosts()
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));

submitBtn.addEventListener('submit', () => {
  MyFetch.createPost()
    .then((post) => console.log(post))
    .catch((err) => console.log(err));
});
