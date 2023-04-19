import './style.css';
import logo from './assets/logo.png';

document.querySelector('#logo').src = logo;

const popupContainer = document.querySelector('.popup-cont');


const api = 'https://api.tvmaze.com/shows'

const getJSONData = async () => {
  const response = await fetch(api);
  const jsonData = await response.json();

  display(jsonData[0].image.medium, jsonData[0].name, jsonData[0].language, jsonData[0].schedule.days[0],
    jsonData[0].schedule.time, jsonData[0].rating.average, jsonData[0].status);
  console.log(jsonData[0]);

  close();

};

const display = (img, title, lang, days, time, rating, status) => {

  const section = document.createElement("section");
  section.className = 'popup'

  const popup = ` <div><button class="material-symbols-outlined close">close</button></div>
                  <div>
                    <div class="movie-img"><img src="${img}" alt="movie-img"></div>
                    <div>
                      <div>
                          <h1>${title}</h1>
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
                          <div class="submit-cont"><button type="submit">Comment</button></div>
                      </form>
                    </div>
                      
                  </div>`;

                  section.innerHTML = popup;
                  popupContainer.appendChild(section)

}

const close = () => {

  const closeBtn = document.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    popupContainer.classList.toggle('hide');
  });
  
}

const btn = document.querySelector('.test-btn');

btn.addEventListener('click', getJSONData);

// getJSONData();

 