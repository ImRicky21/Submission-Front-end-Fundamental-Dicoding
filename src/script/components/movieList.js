import './movieItem';

class movieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

    set movies(moviesData) {
        this._movies = moviesData;
        this.render();
    }

    renderError(message) {
      this.shadowDOM.innerHTML = `
        <style>
          .message {
            font-weight: bolder;
            color: rgba(0,0,0,0.5);
          }
        </style>
      `;
        this.shadowDOM.innerHTML += `<h2 class="message">${message}</h2>`;
      }

    render() {
        this.shadowDOM.innerHTML = '';
        this._movies.forEach(movie => {
          const movieItemElement = document.createElement('movie-item');
          movieItemElement.movie = movie;
          this.shadowDOM.appendChild(movieItemElement);
        });
      }
}

customElements.define('movie-list', movieList);