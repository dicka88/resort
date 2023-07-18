import FavoriteRestaurantDb from '../data/idb-favorite-restaurant';

class FabFavoriteRestaurant extends HTMLElement {
  constructor() {
    super();

    this.id = this.getAttribute('id');
    this.pictureId = this.getAttribute('pictureId');
    this.name = this.getAttribute('name');
    this.city = this.getAttribute('city');
    this.rating = this.getAttribute('rating');
    this.description = this.getAttribute('description');
  }

  async connectedCallback() {
    const isExist = await FavoriteRestaurantDb.getRestaurant(this.id);

    this.innerHTML = `
      <button class="fab ${isExist ? 'fab-primary' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37c-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/></svg>
      </button>
    `;

    this.querySelector('button').addEventListener('click', this.handleClick.bind(this));
  }

  async handleClick() {
    const isExist = await FavoriteRestaurantDb.getRestaurant(this.id);

    if (isExist) {
      this.querySelector('button').classList.remove('fab-primary');
      FavoriteRestaurantDb.deleteRestaurant(this.id);
    } else {
      this.querySelector('button').classList.add('fab-primary');
      FavoriteRestaurantDb.putRestaurant({
        id: this.id,
        pictureId: this.pictureId,
        name: this.name,
        city: this.city,
        rating: this.rating,
        description: this.description,
      });
    }
  }
}

customElements.define('fab-favorite-restaurant', FabFavoriteRestaurant);
