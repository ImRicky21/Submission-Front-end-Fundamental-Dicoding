import moviesData from "./movies";

class DataSource {
  static searchMovie(keyword) {
    return new Promise((resolve, reject) => {
      const filterMovies = moviesData.filter(moviesData => moviesData.title.toUpperCase().includes(keyword.toUpperCase()));
      console.log("FiltMov " + filterMovies);
          if (filterMovies.length) {
        resolve(filterMovies);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;