import RESTAURANT_API from '../globals/restaurant-api-endpoint';

class RestaurantSource {
  static async getRestaurantList() {
    const res = await fetch(RESTAURANT_API.LISTS);
    const resJson = await res.json();

    return resJson;
  }

  static async getRestaurantDetail(id) {
    const res = await fetch(RESTAURANT_API.DETAIL(id));
    const resJson = await res.json();

    return resJson;
  }

  static async search(query) {
    const res = await fetch(RESTAURANT_API.SEARCH(query));
    const resJson = await res.json();

    return resJson;
  }

  static async addRestaurantReview(data) {
    const res = await fetch(RESTAURANT_API.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resJson = await res.json();

    return resJson;
  }
}

export default RestaurantSource;
