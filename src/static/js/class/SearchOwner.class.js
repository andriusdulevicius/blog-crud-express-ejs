import MyFetch from './MyFetch.class.js';

class SearchOwners {
  constructor(inputEl, container) {
    this.inputEl = inputEl;
    this.container = container;

    this.clearContainer();
    this.generateContainer();
  }

  clearContainer() {
    this.container.innerHTML = '';
  }
  generateContainer() {
    console.log('iskvieciu generateContainer');

    const userInput = this.inputEl.value;
    const inputJson = JSON.stringify({ search: userInput }); // reikia sukurti objektas, nes json gali buti tik objektas
    MyFetch.searchOwners(inputJson, (result) => {
      const resArr = result.found;
      console.log(result);
      console.log(this.container);

      resArr.forEach((ownerData) => {
        const oneCard = this.generateOneCard(ownerData);
        this.container.append(oneCard);
      });
    });
  }
  generateOneCard({ _id, name, email, updatedAt }) {
    const oneCard = document.createElement('div');
    oneCard.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title name-search">${name}</h5>
            <h6 class="text-muted">${email}</h6>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="/owners/single/${_id}" class="btn btn-sm btn-outline-secondary">View</a>
              </div>
              <small class="text-muted">${updatedAt.toLocaleString()}</small>
            </div>
            <form action="/owners/delete/${_id}" method="POST">
              <button class="btn btn-danger" type="submit">Delete me</button>
            </form>
          </div>
        </div>
      `;
    return oneCard;
  }
}

export default SearchOwners;
