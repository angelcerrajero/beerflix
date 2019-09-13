import api from './api.js';

const templateBeer = ({ beerId, name, description, image, price, ingredients, firstBrewed, contributedBy, likes }) => `
<div class="card">
        <header class="card-header">
          <p class="card-header-title">${name}</p>
          <div class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
        </header>
        <div class="card-content">
          <img class="img-cerve"src="${image}" alt="">
          <div class="content">
            <u><h5>Description</h3></u>
                <h8>${description}</h8>
            <br>
            <br>
            <time>Brewed on: ${firstBrewed}</time>
            <br>
            <h8>Created by: ${contributedBy} </h8>
          </div>
        </div>
        
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Price: ${price}$</a>
          <a href="#" class="card-footer-item">${likes}: Likes</a>
          
          
        </footer>
      </div>
`;
const { getBeer} = api();

const renderBeer = (element, beers) => {
    
    const htmlBeer = beers.slice(0,10).map(templateBeer).join('');
    element.innerHTML = `
    <div class="beer-section">
      ${htmlBeer}
    </div>
  `;

}

const renderBeersDOM = async text =>{
    try {
        const  mainSection = document.querySelector('#container');
        const items = await getBeer(text);
        renderBeer(mainSection, items);

        
    } catch (err) {
        console.log(err)
        
    }
    

};

export { renderBeersDOM };