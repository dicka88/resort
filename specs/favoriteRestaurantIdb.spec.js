const { default: FavoriteRestaurantDb } = require("../src/scripts/data/idb-favorite-restaurant");
const { itActsAsFavoriteRestaurantModel } = require("./contract/favoriteRestaurantContract");

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDb.getAllRestaurants()).forEach(async (movie) => {
      await FavoriteRestaurantDb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDb);
});
