import likeImage from '../assets/Like-emoji.png';
import { display, close } from './display-popup.js';
import { addLike } from './likes.js';
import movieCounter from './item-count.js';

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CAgGSvEwNloHCTrC5zAj/likes/');
  const data = await response.json();
  return data.likes;
};

const createList = async () => {
  const container = document.querySelector('.home');

  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();

  const filtered = data.filter((display) => display.id <= 12);

  filtered.forEach((content) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'card';
    movieCard.id = content.id;

    const picture = document.createElement('img');
    picture.alt = 'Movie photo';
    picture.src = content.image.medium;
    movieCard.appendChild(picture);

    const title = document.createElement('h3');
    title.className = 'movie-title';
    title.textContent = `${content.name}`;
    movieCard.appendChild(title);

    const likeBtn = document.createElement('img');
    likeBtn.alt = 'Like button';
    likeBtn.className = 'like-btn';
    likeBtn.src = likeImage;
    movieCard.appendChild(likeBtn);

    
    const likes = document.createElement('p');
    likes.className = 'like-cont';
    likes.innerHTML = '0 likes';
    getLikes().then((data) => {
      data.filter((item) => {
        if (item.item_id === `item${content.id}` && likes.innerHTML) {
          likes.innerHTML = `${item.likes} likes`;
        } 
        return '';
      })
    });


movieCard.appendChild(likes);

    likeBtn.onclick = (e) => {
      const { id } = e.target.parentElement;
      addLike(id, likes);
    };

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
        content.schedule.days[0], content.schedule.time, content.rating.average, content.status);

      close();
    });

    movieCard.appendChild(comment);

    container.appendChild(movieCard);
  });
  movieCounter();
};

export default createList;