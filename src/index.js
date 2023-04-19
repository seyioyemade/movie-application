import './style.css';
import logo from './assets/logo.png';
import createList from './modules/movie-list.js';

document.querySelector('#logo').src = logo;

createList();
