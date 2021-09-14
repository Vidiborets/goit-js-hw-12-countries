import refs from './refsCountries.js';
import debounce from 'lodash.debounce';
import updateCountries from './updateCountries';
import fetchCountries from './fetchCountries';

refs.inputForm.addEventListener('input', debounce(searchCountries, 500));
refs.searchForm.addEventListener('submit', startSearch);


function searchCountries(e) {
    const searchQuery = e.target.value;
    clearCountries();
    fetchCountries(searchQuery)
        .then(updateCountries)
        .catch(onFetchError);
}

function searchForm() {
    
}

function startSearch(e) {
    e.preventDefault();
    clearCountries();
}

function onFetchError(error) {
    alert('Nothing found')
};

function clearCountries() {
    refs.cardContainer.innerHTML = '';
}
export default searchCountries