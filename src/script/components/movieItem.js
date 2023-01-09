class movieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set movie(moviesData) {
        this._movie = moviesData;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
              
            .poster-movie {
                height:250px;
                object-position: center;
            }    
            .movie-info {
                width:400px;
                padding: 24px;
            }
            .movie-info > p {
                font-weight:lighter;
                font-size: 12px;
            }
            .movie-info > h {
                font-weight:bolder;
                font-size: 12px;
            }
            .card-movie{
                color:white;
                align-item:center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                margin-top:20px;
                border-radius:20px;
                display:flex;
                justify-content:space-around;
                background-color:rgb(33, 50, 94);
            }

            </style>
            <div class="card-movie">
            <img class="poster-movie" src="https://image.tmdb.org/t/p/w220_and_h330_face/${this._movie.poster_path}" alt="poster">
            <div class="movie-info">
                <h2>${this._movie.title}</h2>
                <p>${this._movie.overview}</p>
            </div>
            </div>
            `
            ;
    }
}


customElements.define('movie-item', movieItem);