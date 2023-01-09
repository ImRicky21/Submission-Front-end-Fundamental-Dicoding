class appBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
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
        :host {
            display: block;
            width: 100%;
            background-color: rgb(21, 0, 80);
            text-align: center;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(224, 191, 130, 0.932);
            }
        h2 {
            padding: 12px;
        }
        </style>
        
        <h2>Movie search</h2>
        `;
    }
}

customElements.define(`app-bar`, appBar);