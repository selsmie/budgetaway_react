const countryURL = 'http://localhost:8080/countries';


// const addCountry = (country) =>{
//     return fetch(countryURL, {
//         method: 'POST',
//         body: JSON.stringify(country),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
// }

const addCountries = (countries) =>{
    return fetch(countryURL, {
        method: 'POST',
        body: JSON.stringify(countries),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

const getCountriesWithLanguageAndRegion = (searchLanguage, searchRegion) => {
    return fetch(countryURL + "?language=" + searchLanguage + "&region=" + searchRegion)
    .then(res => res.json())
}

const getCountriesWithLanguage = (searchLanguage) => {
    return fetch(countryURL + "?language=" + searchLanguage)
    .then(res => res.json())
}

const getCountriesWithRegion = (searchRegion) => {
    return fetch(countryURL + "?region=" + searchRegion)
    .then(res => res.json())
}

const getAllLanguages = () => {
    return fetch(countryURL + "?languages=true")
    .then(res => res.json())
}

const getAllRegions = () => {
    return fetch(countryURL + "?regions=true")
    .then(res => res.json())
}

export {addCountries, getCountriesWithLanguageAndRegion, getCountriesWithLanguage, getCountriesWithRegion, getAllLanguages, getAllRegions}