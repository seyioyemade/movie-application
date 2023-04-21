const { JSDOM } = require('jsdom');

const movieCounter = require('./item-count.js');

describe('movieCounter', () => {
  beforeEach(() => {
    // Set up the DOM environment
    const dom = new JSDOM('<!DOCTYPE html><div class="movie-no"></div>');
    global.document = dom.window.document;
  });

  it('displays the count of movies equal to 12', async () => {
    await movieCounter();
    setTimeout(() => {
      const movieNoElement = document.querySelector('.movie-no');
      expect(movieNoElement.textContent).toBe('(12)');
    }, 500);
  });
});