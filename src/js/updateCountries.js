import countriesCardTps from '../tamplase/countries.hbs'
import countriesCardAll from '../tamplase/countries-list.hbs'
import refs from '../js/refsCountries.js'
import alert from './notificationCountry';
import fetchCountries from '../js/fetchCountries';

function updateCountries(data) {
    const markupCountAll = countriesCardTps(data);
    const marckupList = countriesCardAll(data);

    if (data.status === 404) {
        alert({
            type: 'notice',
            text: 'Nothing found ☹',
            delay: 2000,
            width: '300px',
            maxTextHeight: null,
        });
    }
    if (data.length === 0) {
        return
    }
    if (data.length === 1) {
        refs.cardContainer.insertAdjacentHTML('beforeend', markupCountAll);
        return;
    }
    if (data.length > 10) {
        alert({
            type: 'error',
            text: 'Too many matches found. Please enter a more specific query!',
            delay: 2000,
            maxTextHeight: null,
        });
        return;
    }
    refs.cardContainer.insertAdjacentHTML('beforeend', marckupList);
}
export default updateCountries;