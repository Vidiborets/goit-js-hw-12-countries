import countriesCardTps from '../tamplase/countries.hbs'
import countriesCardAll from '../tamplase/countries-list.hbs'
import refs from '../js/refsCountries.js'
import fetchCountries from './fetchCountries';

function updateCountries(data) {
    const markupCountAll = countriesCardTps(data);
    const marckupList = countriesCardAll(data);

    if (data.status === 404) {
        alert('Nothing found')
        return
    }
    if (data.length === 0) {
        refs.cardContainer.insertAdjacentHTML('beforeend', markupCountAll)
        return
    }
    if (data.length === 1) {
        refs.cardContainer.insertAdjacentHTML('beforeend', markupCountAll);
        return;
    }
    if (data.length > 10) {
        alert('Too many matches found.Please enter a more specific query!')
        return;
    }
    refs.cardContainer.insertAdjacentHTML('beforeend', marckupList);
}
export default updateCountries;