/**
 * @jest-environment jsdom
 */

import commentsCounter from '../modules/counter-comments.js';

describe('commentsCounter', () => {
  test('updates the header text with the correct comment count', async () => {
    const ul = document.createElement('ul');
    ul.innerHTML = `
      <li>Comment 1</li>
      <li>Comment 2</li>
      <li>Comment 3</li>
    `;
    const header = document.createElement('h2');

    await commentsCounter(ul, header);

    expect(header.textContent).toBe('Comments (3)');
  });

  test('updates the header text with a zero count if there are no comments', async () => {
    const ul = document.createElement('ul');
    const header = document.createElement('h2');

    await commentsCounter(ul, header);

    expect(header.textContent).toBe('Comments (0)');
  });
});
