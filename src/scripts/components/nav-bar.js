class Navbar extends HTMLElement{
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = 
        `<style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #212121;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 15px;
            }
            span{
                color: red;
            }
        </style>

        <h2><span>INDO</span>NESIA Coronavirus COVID-19 Cases </h2>`;
        
    }
}

customElements.define('nav-bar',Navbar);