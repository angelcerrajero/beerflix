import { renderBeersDOM } from './beer.js';
import renderDetail from './detail.js';

page('/', () => { 
  console.log('Home page');
  //showFilter();
  //hideQuotesForm();
  renderBeersDOM();
});

page('/detail/:id', ctx => {
  console.log('Detail');
  const { params: { id } } = ctx;
  // hideFilter();
  // showQuotesForm();
  console.log(id)
  renderDetail(id);
  // addQuoteListener(id);
});

page();
