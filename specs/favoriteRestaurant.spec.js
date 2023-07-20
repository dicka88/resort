import { FabFavoriteRestaurant } from "../src/scripts/components/fab-favorite-restaurant";

import '../src/scripts/components/fab-favorite-restaurant'

describe("Favoriting a Restaurant", () => {
  fit("should show like button when the restaurant has not favorited before", async () => {
    const button = document.createElement(FabFavoriteRestaurant.tag) 

    console.log(button.innerHTML);
  });

  it("should not show unlike button when the restaurant is not favorited before", () => {})
  it("should be able favorite restaurant", () => {})
  it("should not add restaurant to favorite when has no id", () => {})
});
