const FavoriteButtonPresenter = {
  async init({ container, favoriteRestaurantIdb, restaurant }) {
    this._container = container;
    this._favoriteRestaurantIdb = favoriteRestaurantIdb;
    this._restaurant = restaurant;

    await this._render();
  },
  async _render() {
    const { id } = this._restaurant;
    const restaurant = await this._favoriteRestaurantIdb.getRestaurant(id);

    if (restaurant) {
      this._renderUnfavorite();
    } else {
      this._renderFavorite();
    }
  },
  async _renderUnfavorite() {
    this._container.innerHTML = `
      <button id="favorite-button" class="fab fab-primary" aria-label="Unfavorite this restaurant">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37c-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/></svg>
      </button>
    `;

    document.querySelector('#favorite-button').addEventListener('click', async () => {
      await this._favoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._render();
    });
  },
  async _renderFavorite() {
    this._container.innerHTML = `
      <button id="favorite-button" class="fab" aria-label="Favorite this restaurant">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37c-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/></svg>
      </button>
    `;

    document.querySelector('#favorite-button').addEventListener('click', async () => {
      await this._favoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._render();
    });
  },
};

export default FavoriteButtonPresenter;
