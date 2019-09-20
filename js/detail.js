import api from './api.js';
// import { renderQuotes } from './quotes.js';

const { getShowDetail } = api();



const renderDetail = async id => {
    try {
      const selector = document.querySelector('main');
      const [show] = await Promise.all([getShowDetail(id)]);
      // const show = await getShowDetail(id);
      // await renderQuotes(id);
      selector.innerHTML = detailTemplate(show);
    } catch (err) {
      console.error(err);
    }
  };
  
  export default renderDetail;