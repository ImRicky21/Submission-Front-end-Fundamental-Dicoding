class searchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            .search-container {
                max-width: 400px;
                box-shadow: 2px 4px 8px 2px rgba(196, 161, 110, 0.993);
                padding: 10px;
                border-radius: 5px;
                display: flex;
                justify-content:space-around;
                align-item: center;
                background-color: white;
            }
            
            .search-input {
                font-size: 14px;
                width: 70%;
                padding: 16px;
                border:none;
                font-weight: bold;
            }
            
            .search-input::placeholder {
                color: rgb(221, 163, 86);
                font-weight: normal;
            }
            
            .search-button {
                width: 200px;
                cursor: pointer;
                margin-left: auto;
                padding: 10px;
                background-color: rgb(33, 50, 94);
                color: white;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                 display:flex;
                flex-direction: column;
                }
                
                .search-input {
                width: 100%;
                margin-bottom: 12px;
                }
                
                .search-button {
                width: 100%;
                }
            }
            </style>
            
            <div id="search-container" class="search-container">
                <input placeholder="Search Movie" id="searchElement" class="search-input" type="text">
                <button id="searchBtn" class="search-button" type="submit">Search</button>
            </div>
            `;

    this.shadowDOM.querySelector('#searchBtn').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', searchBar);