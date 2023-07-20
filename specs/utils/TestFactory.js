import FavoriteRestaurantDb from "../../src/scripts/data/idb-favorite-restaurant";
import FavoriteButtonPresenter from "../../src/scripts/presenters/favorite-button.presenter";

const TestFactories = {
  async createLikeButton(restaurant) {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';

    await FavoriteButtonPresenter.init({
      container: document.querySelector("#favorite-button-container"),
      favoriteRestaurantIdb: FavoriteRestaurantDb,
      restaurant
    })

  }
}

export default TestFactories