const searchBar = document.getElementById('search-bar');
const input = document.getElementById('search-input');

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();

  input.addEventListener('input', searchOwners);
});

function searchOwners(data) {
  fetch('/api/owners/search', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
