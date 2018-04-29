$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('check if URL is defined + not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });
    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('check if name is defined + not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });


  /* a new test suite named "The menu" */
  describe('menu', function() {
    /* a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('check if menu is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    /* a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('check if menu changes visibility on click', function() {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
  /*  a new test suite named "Initial Entries" */
/* a test that ensures when the loadFeed
 * function is called and completes its work, there is at least
 * a single .entry element within the .feed container.
 * Remember, loadFeed() is asynchronous so this test will require
 * the use of Jasmine's beforeEach and asynchronous done() function.
 */
describe('Initial Entries', function(){
  beforeEach(function(done) {
  loadFeed(0, function() {
    done();
  });
});
  it('at least 1 entry within the feed container', function() {
    expect($('.entry').length).toBeGreaterThan(0);
  });

});

/* a new test suite named "New Feed Selection" */
/* a test that ensures when a new feed is loaded
 * by the loadFeed function that the content actually changes.
 * Remember, loadFeed() is asynchronous.
 */
 describe('New Feed Selection', function(){
var feedInit;
var feedLoaded;
  beforeEach(function(done) {
    loadFeed(0, function() {
      feedInit = $('.feed').html();

      loadFeed(1, function() {
        feedLoaded = $('.feed').html();
        done();
      });

    });
    it('the initial feed does not match the loaded feed', function() {
      expect(feedInit).not.toEqual(feedLoaded);
    });
  });
});
});
