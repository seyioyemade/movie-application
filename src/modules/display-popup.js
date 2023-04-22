import commentsData from './comments.js';

const mainContainer = document.querySelector('main');
const popupContainer = document.createElement('section');
popupContainer.className = 'popup-cont';

export const display = (img, title, genres, lang, days, time, rating, sts, id) => {
  const section = document.createElement('section');
  section.className = 'popup';

  const closeDiv = document.createElement('div');
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('material-symbols-outlined', 'close');
  closeBtn.textContent = 'close';
  closeDiv.appendChild(closeBtn);
  const allDetailsCont = document.createElement('div');
  const movieImgCont = document.createElement('div');
  movieImgCont.className = 'movie-img';
  const movieImg = document.createElement('img');
  movieImg.src = img;
  movieImg.alt = 'movie-img';
  movieImgCont.appendChild(movieImg);
  const movieInfo = document.createElement('div');
  const movTitle = document.createElement('h1');
  movTitle.textContent = title;
  const infoLists = document.createElement('ul');
  infoLists.className = 'more-info';
  infoLists.innerHTML = `<li>Genre: ${genres}</li>
  <li>Language: ${lang}</li>
  <li>Schedule: ${days}, ${time}</li>
  <li>Rating: ${rating}</li>
  <li>Status: ${sts}</li>`;
  movieInfo.appendChild(infoLists);
  const commentsCont = document.createElement('div');
  commentsCont.className = 'comments';
  const commentsTitle = document.createElement('h2');
  commentsTitle.textContent = 'Comments';
  const commentsList = document.createElement('ul');
  commentsList.className = 'comments-list';

  commentsData(commentsList, id);

  commentsCont.append(commentsTitle, commentsList);
  const formCont = document.createElement('div');
  formCont.className = 'comment-form';
  const formTitle = document.createElement('h2');
  formTitle.textContent = 'Add a comment';
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.id = 'name';
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'name');
  input.setAttribute('placeholder', 'Your name');
  const textarea = document.createElement('textarea');
  textarea.id = 'insights';
  textarea.setAttribute('name', 'insights');
  textarea.setAttribute('cols', '30');
  textarea.setAttribute('rows', '10');
  textarea.setAttribute('placeholder', 'Your insights');
  const submitCont = document.createElement('div');
  submitCont.className = 'submit-cont';
  const submit = document.createElement('button');
  submit.textContent = 'Comment';
  submit.setAttribute('type', 'submit');
  submit.className = 'comment-btn';
  submitCont.appendChild(submit);
  form.append(input, textarea, submitCont);
  formCont.append(formTitle, form);
  allDetailsCont.append(movieImgCont, movieInfo, commentsCont, formCont);

  section.append(closeDiv, allDetailsCont);
  popupContainer.appendChild(section);
  mainContainer.insertBefore(popupContainer, mainContainer.firstElementChild);
};

export const close = () => {
  const closeBtn = document.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    popupContainer.innerHTML = '';
    popupContainer.remove();
  });
};
