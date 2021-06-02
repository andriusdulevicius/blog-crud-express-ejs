import MyFetch from './class/MyFetch.class.js';

const editBtn = document.getElementById('editBtn');
const post = document.getElementById('one-post');
const mainForm = document.getElementById('form');

// editBtn.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log('edit mode');
//   const id = post.dataset.postId;
//   MyFetch.editPost(id, (result) => {
//     result.redirect ? (window.location = result.redirect) : null;
//   });
// });

const saveBtn = document.getElementById('saveBtn');
