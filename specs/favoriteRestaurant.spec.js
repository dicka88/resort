import FavoriteRestaurantDb from "../src/scripts/data/idb-favorite-restaurant";
import TestFactories from "./utils/TestFactory";

fdescribe("Favoriting a Restaurant", () => {
  it("should show like button when the restaurant has not favorited before", async () => {
    const element = await TestFactories.createLikeButton({ id: 1 });

    expect(
      element.querySelector("button[aria-label='Like this restaurant']")
    ).toBeTruthy();
  });

  it("should not show unlike button when the restaurant is not favorited before", async () => {
    await FavoriteRestaurantDb.putRestaurant({ id: 1 });
    const element = await TestFactories.createLikeButton({ id: 1 });

    expect(
      element.querySelector("button[aria-label='Unlike this restaurant']")
    ).toBeTruthy();

    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  fit("should be able favorite restaurant", async () => {
    const element = await TestFactories.createLikeButton({ id: 1 });

    element.querySelector("button").dispatchEvent(new Event("click"));

    const restaurant = await FavoriteRestaurantDb.getRestaurant(1);

    expect(restaurant).toEqual(1);

    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it("should not add restaurant to favorite when has no id", async () => {
    const element = await TestFactories.createLikeButton({});

    element.querySelector("button").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
  });
});