import {renderBeersDOM} from './beer.js'

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-form .input.search');
const searchStartDate = document.getElementById('start-date');



searchForm.addEventListener('submit', evt => {
    evt.preventDefault();  
    const year = searchStartDate.value.slice(0, 4);
    const month = searchStartDate.value.slice(5, 8);
    const startDate = month + '/' + year;
    
    if (searchInput.validity.valid) {
      // render shows
    //   setItem('navbar-input', searchInput.value);
       
      renderBeersDOM(searchInput.value, startDate);
      
    }
  });



