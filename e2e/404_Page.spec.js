Feature('404 Page');

Before(({ I }) => {
  I.amOnPage('/#/randompagethatisnotexist');
});

Scenario('Showing 404 Illustation', ({ I }) => {
  I.see('Go Back to Homepage', 'a');
});
