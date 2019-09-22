import api from './api.js';


const { getBeerDetail } = api();
const { createLike } = api();






const detailTemplate = ({ beerId, name, description, image, price, ingredients, firstBrewed, contributedBy, likes}) => 
`
<div class="card-detail">
                <div class="card-image-detail">
                <img class="img-cerve-detail"src="${image}" alt="">
                </div>
                <div class="card-content">
                <div class="media-detail">
                <div class="media-left">
                <p>
                  <a><figure id="detail-image" class="image is-48x48 ">
                    <img src="/img/like.png" alt=""></a>
                  </figure>
                <p>
                </div>
                <div class="media-content ">
                <p class="likes-numbre">${likes} Likes</p>
                  
                </div>
              </div>
              
                  <div class="content">
                    <div>
                    <br>
                    <p class="title is-4">${name} - Price: ${price}$</p>
                    </div>
                    <div class="detail-description">
                    ${description}
                    </div>
                    <br>
                    <br>
                    <div>
                    <p class="title is-4">Malt</p>
                    <div id="list">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              


`;

const detailTemaplateIngredients = ({ name }) => 
`
    <div class="list-item">
        <p>${name}</p>
    </div>
    
    
`;


const renderIngredients = (element, malt, hops, yeast) => {
    const htmlMalt = malt.map(detailTemaplateIngredients).join('');
    const htmlHops = hops.map(detailTemaplateIngredients).join('');
    
    element.innerHTML = `
      <div class="show-ingredients">
        ${htmlMalt}
        <br>
      </div>
      <div class="show-ingredients">
      <br>
      <p class="title is-4">Hops</p>
        ${htmlHops}
      <br>
      <br>
      <p class="title is-4">Yeast</p>
    </div>    
    <br>
        ${yeast}
    `;
}


const renderDetail = async id => {
    try {
        const mainSection = document.querySelector('section');
        const beer = await getBeerDetail(id);
        mainSection.innerHTML = detailTemplate(beer);
        const ingredientsSection = document.querySelector('#list')
        const { ingredients: { malt,  hops, yeast } } = beer;
        renderIngredients(ingredientsSection, malt, hops, yeast);
        const detailImage = document.getElementById('detail-image');
        
        detailImage.addEventListener('click', async () =>{
            const beerId = detailTemplate.beerId;
            await createLike(id);
            renderDetail(id);
            alert('Thank you for your like!!');
            
        });
        

    } catch (err) {
        console.error(err);
    }
  };



  
  export default renderDetail;