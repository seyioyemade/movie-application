let jsdom = require("jquery")

const fetchMovies = async() => {
    const response = await fetch('https://api.tvmaze.com/shows')
    const data = response.json();
    return data 
  }
  
  const movieCounter = async(arr) => {
    const data = await fetchMovies();
  arr = data.filter((display) => display.id <= 12);

    
    jsdom = document.querySelector('.movie-no');
    jsdom.textContent = `(${arr.length})`
}


module.exports = movieCounter;