const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__title a');

  const firstResto = locate('.restaurant__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // Unliking restaurant
  I.seeElement('.restaurant__title a');

  I.click(likedRestoTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.amOnPage('/'); // back to default page
});
