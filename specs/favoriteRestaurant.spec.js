import FavoriteRestaurantDb from "../src/scripts/data/idb-favorite-restaurant";
import TestFactories from "./utils/TestFactory";

describe("Favoriting a Restaurant", () => {

  it("should show like button when the restaurant has not favorited before", async () => {
    await TestFactories.createLikeButton({ id: 1 });

    expect(
      document.querySelector("button[aria-label='Favorite this restaurant']")
    ).toBeTruthy();
  });

  it("should not show unlike button when the restaurant is not favorited before", async () => {
    await TestFactories.createLikeButton({ id: 1 });

    expect(
      document.querySelector("button[aria-label='Unfavorite this restaurant']")
    ).toBeFalsy();

    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it("should be able favorite restaurant", async () => {
    await TestFactories.createLikeButton({ id: 1 });

    document.querySelector("#favorite-button").dispatchEvent(new Event("click"));

    const restaurant = await FavoriteRestaurantDb.getRestaurant(1);

    expect(restaurant.id).toEqual(1);

    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it("should not add restaurant to favorite when has no id", async () => {
    await TestFactories.createLikeButton({});

    document.querySelector("#favorite-button").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
  });
});