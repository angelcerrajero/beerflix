import { renderBeersDOM } from './beer.js';

page('/', () => { 
  console.log('Home page');
  //showFilter();
  //hideQuotesForm();
  renderBeersDOM();
});
// page('/detail/:id', ctx => {
//   console.log('Detail');
//   const { params: { id } } = ctx;
//   hideFilter();
//   showQuotesForm();
//   renderDetail(id);
//   addQuoteListener(id);
// });
page();
