/**
 * 
 */
// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('https://www.matrixabsence.com');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});