import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteMovieArray = {
  getRestaurant(id) {
    if (!id) {
      return null;
    }

    return favoriteRestaurants.find((movie) => movie.id === id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(movie) {
    if (!movie.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(movie.id)) {
      return;
    }

    favoriteRestaurants.push(movie);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((movie) => movie.id !== id);
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteMovieArray);
});
