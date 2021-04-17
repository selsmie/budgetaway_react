const dbURL = 'http://localhost:8080/api/countries';


const addCountry = (country) =>{
    return fetch(dbURL, {
        method: 'POST',
        body: JSON.stringify(country),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

const getCountriesWithLanguageAndRegion = (searchLanguage, searchRegion) => {
    return fetch(dbURL + "?language=" + searchLanguage + "&region=" + searchRegion)
    .then(res => res.json())
}

const getCountriesWithLanguage = (searchLanguage) => {
    return fetch(dbURL + "?language=" + searchLanguage)
    .then(res => res.json())
}

const getCountriesWithRegion = (searchRegion) => {
    return fetch(dbURL + "?region=" + searchRegion)
    .then(res => res.json())
}

const getAllLanguages = () => {
    return fetch(dbURL + "?languages=true")
    .then(res => res.json())
}

const getAllRegions = () => {
    return fetch(dbURL + "?regions=true")
    .then(res => res.json())
}

export {addCountry, getCountriesWithLanguageAndRegion, getCountriesWithLanguage, getCountriesWithRegion, getAllLanguages, getAllRegions}