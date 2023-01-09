import axios from 'axios';

    const BASE_URL = `https://api.themoviedb.org/3`
    const api_key = '7df1dd19a0bffe015194eddb5c964b02'
    const query = 'r';
    let moviesData = [];

    
    const api = axios.create({ baseURL: BASE_URL });
    const getMovies = api.get("/search/movie", { params: { api_key, query } });
    getMovies.then(response => {
      for (let i = 0; i < response.data.results.length; i++){
        moviesData[i] = response.data.results[i];
      }
    });
    console.log(moviesData);

export default moviesData