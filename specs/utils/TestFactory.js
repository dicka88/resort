const { FabFavoriteRestaurant } = require("../../src/scripts/components/fab-favorite-restaurant");

const TestFactories = {
  async createLikeButton(restaurant) {
    await import('../../src/scripts/components/fab-favorite-restaurant')
    
    document.body.innerHTML = `<fab-favorite-restaurant id="${restaurant.id}"></fab-favorite-restaurant>`

    await new Promise(resolve => setTimeout(resolve, 200))

    return document.querySelector(FabFavoriteRestaurant.tag)
  }
}

export default TestFactories