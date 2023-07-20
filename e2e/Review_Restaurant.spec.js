const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('Reviewing Restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item a', 5);
  I.seeElement('.restaurant-item a');

  const firstResto = locate('.restaurant-item a').first();
  I.click(firstResto);

  I.waitForElement(".detail__review")

  const customerName = "John Doe - e2e"
  const customerReview = "This review is generate by e2e on " + new Date().toISOString() 

  I.seeElement(".detail__review input[name]");
  I.seeElement(".detail__review textarea[name=review]");

  await I.fillField(".detail__review input[name]", customerName);
  await I.fillField(".detail__review textarea[name=review]", customerReview);

  I.seeElement(".detail__review button[type=submit]");
  I.click(".detail__review button[type=submit]");

  // ensure the comment is on page
  I.waitForElement('.customer__review', customerReview)
  I.seeElement('.customer__review', customerReview)

  I.wait(2)

  const lastName = locate(".customer__name").last()
  const lastReview = locate(".customer__review").last()

  const newCustomerName = await I.grabTextFrom(lastName)
  const newCustomerReview = await I.grabTextFrom(lastReview)

  assert.strictEqual(customerName, newCustomerName)
  assert.strictEqual(customerReview, newCustomerReview)
});