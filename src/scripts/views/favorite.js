import FavoriteRestaurantDb from '../data/idb-favorite-restaurant';
import RESTAURANT_IMAGE from '../globals/restaurant-image-endpoint';

const Favorite = {
  async render() {
    return `
      <section style="margin-top: 80px;">
        <div class="container">
          <section class="restaurant">
            <div class="container">
              <h1>Your Favorite Restaurant</h1>
              <div id="restaurants">
              
              </div>
            </div>
          </section>
        </div>
      </section>
    `;
  },
  async afterRender() {
    const $restaurants = document.querySelector('#restaurants');

    const favorites = await FavoriteRestaurantDb.getAllRestaurants();

    if (favorites.length === 0) {
      $restaurants.innerHTML = '<no-result-found text="No one restaurant added into your favorite"></no-result-found>';
      return;
    }

    const restaurantHTML = favorites.map((item) => `
      <restaurant-item
        id="${item.id}"
        src="${RESTAURANT_IMAGE.medium(item.pictureId)}"
        name="${item.name}"
        city="${item.city}"
        rating="${item.rating}"
        description="${item.description}"
      ></restaurant-item>
    `);

    $restaurants.innerHTML = `
      <div class="restaurant-lists">
        ${restaurantHTML.join('')}
      </div>
    `;
  },
};

export default Favorite;
