const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('No one restaurant added into your favorite', 'p');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.see('No one restaurant added into your favorite', 'p');

  I.amOnPage('/#');

  I.waitForElement('.restaurant-item a');
  I.seeElement('.restaurant-item a');

  const firstResto = locate('.restaurant-item a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#favorite-button');
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item a');

  const favoritedRestoTitle = await I.grabTextFrom('.restaurant-item a');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.see('No one restaurant added into your favorite', 'p');

  I.amOnPage('/#');

  I.waitForElement('.restaurant-item a');
  I.seeElement('.restaurant-item a');

  const firstResto = locate('.restaurant-item a').first();
  I.click(firstResto);

  I.waitForElement('#favorite-button');
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item a');

  const firstFavoritedResto = locate('.restaurant-item a').first();

  I.click(firstFavoritedResto);

  I.waitForElement('#favorite-button');
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');

  I.see('No one restaurant added into your favorite', 'p');
});
