import Swal from 'sweetalert2';
import '../components/movieList';
import '../components/searchBar';
import DataSource from '../service/data-source';

const main =  () => {
  const elementSearch = document.querySelector('search-bar');
  const movieList = document.querySelector('movie-list');
  const onButtonSearch = async () => { 
    
    try {
      const result = await DataSource.searchMovie(elementSearch.value);
      
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
      Swal.fire({
        icon:'error'
      })
      console.log("Error button " + message);
    }
  };

  const renderResult = results => {
    movieList.movies = results;
  };


  const fallbackResult = message => {
    movieList.renderError(message);
  };

  elementSearch.clickEvent = onButtonSearch;
};

export default main;