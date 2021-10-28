class MainFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container text-center mt-4">
                            <h3 class="footer">&copy; 2021 Dandi Irwanto.</h3>
                        </div>`;
    }
}

customElements.define('main-foot',MainFooter);