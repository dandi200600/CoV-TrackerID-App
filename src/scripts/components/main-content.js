import illu from '../../image/illustration.png';

class MainContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container mt-5 mt-md-2">
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-8 text-xs-center text-center text-lg-left">
                                    
                                    <div class="header-caption px-4 py-1">
                                        <div class="clock">
                                            <span class="time"></span>
                                            <span class="date"></span>
                                        </div>
                                        <hr/>
                                        <center>219+ country has been infected</center>
                                    </div>
                                    <h1 class="text-white header-text pt-2">COVID - <span class="text-orange">19</span></h1>
                                    <p class="header-subtext text-gray mt-3 mb-5 text-justify">
                                    Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases.
                                    A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.
                                    </p>
                                        <a href="https://en.wikipedia.org/wiki/COVID-19" target="_blank" class="mt-2 text-decoration-none btn-corona-detail d-inline-block">
                                        <h2 class="text-white">WHAT IS <span class="text-orange"> COVID - 19 </span>?</h2>
                                    </a>
                                </div>
                                    <div class="col-12 col-lg-4 position-relative illustration text-center">
                                    <img src="${illu}" class="img-illustration">
                                </div>
                            </div>
                        </div>`;
    }
}

customElements.define('body-content',MainContent);