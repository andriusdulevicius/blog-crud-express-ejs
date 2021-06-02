import MyFetch from './class/MyFetch.class';

const editBtn = document.getElementById('editBtn');
const post = document.getElementById('one-post');
const mainForm = document.getElementById('form');

editBtn.addEventListener('click', function () {
  const id = post.dataset.postId;
  MyFetch.editPost(id, (result) => {
    result.redirect ? (window.location = result.redirect) : null;
  });
});

// mainForm.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log('sustabdem forma nuo issiuntimo');
//   //supakuojam formos duomenis i integruota JS klase FormData
//   const formData = new FormData(mainForm);
//   //pavercia formData i json formata
//   const jsonFormData = JSON.stringify(Object.fromEntries(formData));
//   // console.log(jsonFormData);
//   MyFetch.createPost(jsonFormData, (result) => {
//     //redirecting to /blogs after submit
//     result.redirect ? (window.location = result.redirect) : null;
//   });
// });
