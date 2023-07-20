import FavoriteRestaurantDb from "../src/scripts/data/idb-favorite-restaurant";
import TestFactories from "./utils/TestFactory";

describe("Unfavoriting a Restaurant", () => {
  beforeEach(async () => {
    await FavoriteRestaurantDb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it("should display unfavorite when the restaurant has been favorited", async () => {
    await TestFactories.createLikeButton({ id: 1 });

    expect(
      document.querySelector('[aria-label="Unfavorite this restaurant"]')
    ).toBeTruthy();
  });

  it("should not display favorite when the restaurant has been favorited", async () => {
    await TestFactories.createLikeButton({ id: 1 });

    expect(
      document.querySelector('[aria-label="Favorite this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able remove favorite restaurant from the list", async () => {
    await TestFactories.createLikeButton({ id: 1 });

    document
      .querySelector('[aria-label="Unfavorite this restaurant"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
  });

  it("should not thrown error if the unfavorite restaurant is not in the list", async () => {
    await TestFactories.createLikeButton({ id: 1 });

    await FavoriteRestaurantDb.deleteRestaurant(1);

    document
      .querySelector('[aria-label="Unfavorite this restaurant"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
  });
});
