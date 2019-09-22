import {renderBeersDOM} from './beer.js';
import storage from './storage.js';

const { setLocalStorage, getLocalStorage } = storage('lStorage');

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-form .input.search');
const searchStartDate = document.getElementById('start-date');

searchInput.value = getLocalStorage('navbar-name-input');
console.log(searchInput.value);

searchForm.addEventListener('submit', evt => {
    evt.preventDefault();  
    const year = searchStartDate.value.slice(0, 4);
    const month = searchStartDate.value.slice(5, 8);
    const startDate = month + '/' + year;
    
    if (searchInput.validity.valid) {
        
        setLocalStorage('navbar-name-input', searchInput.value);
        renderBeersDOM(searchInput.value, startDate);
      
    }
  });



