import styling from 'bootstrap/dist/css/bootstrap.min.css';
import customStyle from '../../style/style.css';

class CovidReportData extends HTMLElement{

    set covidData(data){
        this._covidData = data;
        this.render();
    }

    render(){
        console.log(styling);
        const dateUpdated = new Date(this._covidData.lastUpdate);
        const monthNames = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
        
        this.innerHTML = `
                                    <style>
                                        ${styling}
                                        ${customStyle}
                                        
                                    </style>
                                    
                                    <div class="container mt-5">
                                    <div class="col-lg-4 text-white report text-center text-lg-left mt-3 my-lg-0 mb-4">
                                                <h3>Live COVID-19 Update</h3>
                                                <p class="text-white">
                                                The number of patients infected with COVID-19 in Indonesia. Latest data update ${monthNames[dateUpdated.getMonth()]} ${dateUpdated.getDate()}, ${dateUpdated.getFullYear()}.
                                                </p>
                                            </div>
                                        <div class="row flex-column-reverse flex-lg-row">

                                            <div class="col-lg-8">
                                                <div class="row text-white align-items-center">
                                                    <div class="col-12 col-lg-4 my-3 my-lg-0">
                                                        <div class="card text-center bg-confirmed">
                                                            <div class="card-body">
                                                                <p class="card-text">Confirmed</p>
                                                                <h4 class="card-title">${this._covidData.confirmed.value}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-lg-4">
                                                        <div class="card text-center bg-recovered">
                                                            <div class="card-body">
                                                                <p class="card-text">Recovered</p>
                                                                <h4 class="card-title">${this._covidData.recovered.value}</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-lg-4 my-3 my-lg-0">
                                                        <div class="card text-center bg-dead">
                                                            <div class="card-body">
                                                                <p class="card-text">Deaths</p>
                                                                <h4 class="card-title">${this._covidData.deaths.value}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
    }
}

customElements.define('covid-rep', CovidReportData);