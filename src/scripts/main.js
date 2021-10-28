import '../scripts/components/nav-bar.js';
import '../scripts/components/main-content.js';
import './components/main-footer.js';
import './components/covid-report.js';

const main = () => {
    const baseUrl = 'https://covid19.mathdro.id/api/countries/Indonesia/';

    const getCase = () => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(results => {
                const covidReportElement = document.querySelector('covid-rep');
                covidReportElement.covidData = results;
            })
            .catch(() => showMessage());
    };

    const showMessage = (message = 'Periksa koneksi internet...') =>{
        alert(message);
    };

    getCase();
};

export default main;