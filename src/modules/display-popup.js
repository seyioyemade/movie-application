const mainContainer = document.querySelector('main');
const popupContainer = document.createElement('section');
popupContainer.className = 'popup-cont';

export const display = (img, title, genres, lang, days, time, rating, status) => {
  const section = document.createElement('section');
  section.className = 'popup';

  const popup = ` <div><button class="material-symbols-outlined close">close</button></div>
                  <div>
                    <div class="movie-img"><img src="${img}" alt="movie-img"></div>
                    <div>
                      <div>
                          <h1>${title}</h1>
                          <p>Genre: ${genres}</p>
                          <p>Language: ${lang}</p>
                          <p>Schedule: ${days}, ${time}</p>
                          <p>Rating: ${rating}</p>
                          <p>Status: ${status}</p>
                      </div>
                    </div>
                    <div class="comments">
                      <h2>Comments()</h2>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div class="comment-form">
                      <h2>Add a comment</h2>
                      <form action="">
                          <input type="text" name="name" id="name" placeholder="Your name">
                          <textarea name="" id="" cols="30" rows="10" placeholder="Your insights"></textarea>
                          <div class="submit-cont"><button type="submit" class="comment-btn">Comment</button></div>
                      </form>
                    </div>
                      
                  </div>`;

  section.innerHTML = popup;
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
