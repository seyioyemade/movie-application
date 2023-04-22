import likeImage from '../assets/Like-emoji.png';
import { display, close } from './display-popup.js';
// import {commentsData} from './comments.js';

const createList = async () => {
  const container = document.querySelector('.home');

  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();

  const filtered = data.filter((display) => display.id <= 12);

  filtered.forEach((content) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'card';

    const picture = document.createElement('img');
    picture.alt = 'Movie photo';
    picture.src = content.image.medium;
    movieCard.appendChild(picture);

    const title = document.createElement('h3');
    title.className = 'movie-title';
    title.textContent = `${content.name}`;
    movieCard.appendChild(title);

    const like = document.createElement('img');
    like.alt = 'Like button';
    like.className = 'like-btn';
    like.src = likeImage;
    movieCard.appendChild(like);

    const genre = document.createElement('p');
    genre.className = 'genre';
    genre.textContent = `Genre: ${content.genres}`;
    movieCard.appendChild(genre);

    const status = document.createElement('p');
    status.className = 'status';
    status.textContent = `Status: ${content.status}`;
    movieCard.appendChild(status);

    const comment = document.createElement('button');
    comment.className = 'comment-btn';
    comment.textContent = 'Comments';

    comment.addEventListener('click', () => {
      display(content.image.medium, content.name, content.genres, content.language,
        content.schedule.days[0], content.schedule.time, content.rating.average,
        content.status, content.id);

      close();
    });

    movieCard.appendChild(comment);

    container.appendChild(movieCard);
  });
};

export default createList;