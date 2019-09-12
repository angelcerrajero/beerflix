import api from './api.js';

const templateBeer = ({ beerId, name, description, image, ingredients, firstBrewed, contributedBy }) => `
<div class="card">
        <header class="card-header">
          <p class="card-header-title">
            ${name}
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <img src="${image}" alt="">
          <div class="content">
            <h5>Descripción:</h3>
                <h8>${description}</h8>
            <br>
            <br>
            <h8>Created by: ${contributedBy} </h8>
            <br>
            <time>Fecha de preparación: ${firstBrewed}</time>
          </div>
        </div>
        
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Like</a>
          <a href="#" class="card-footer-item">Quotes</a>
          
        </footer>
      </div>
`;
const { getBeer} = api();

console.log('paso por beer.js')

const renderBeer = (element, beer) => {
    const htmlBeer = beer.slice(0, 10).map(beer).join('');
    element.innerHTML = `
    <div class="show-section">
      ${htmlBeer}
    </div>
  `;

}


const renderBeersDOM = async text =>{
    try {
        const  mainSection = document.querySelector('container');
        const items = await getBeer(text);
        renderBeer(mainSection, items);
        
    } catch (err) {
        console.log(err)
        
    }
    

};

export { renderShowsDOM };