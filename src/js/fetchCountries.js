// function fetchCountries(importCountries) {
//     return fetch()
// }
// export default fetchCountries;
// function fetchCountries() {
//     return fetch('https://restcountries.eu/rest/v2/name/{name}').then(data => {
//         console.log(
//         data
//     )})
// }
import countriesCardTps from '../tamplase/countries.hbs'

fetch('https://restcountries.eu/rest/v2/name/eesti').then(response => {
    return response.json()
}).then(countries => {
    console.log(countries)
    const markUp = countriesCardTps(countries)
    console.log(markUp)
}).catch(error => {
    console.log(error)
});