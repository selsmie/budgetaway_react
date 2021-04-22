const countryURL = 'http://localhost:8080/countries';
const languageURL = 'http://localhost:8080/languages';
const wishlistURL = "http://localhost:8080/wishlists/"

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

const getAllCountries = () => {
    return fetch(countryURL)
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
    return fetch(languageURL)
    .then(res => res.json())
}

const getAllRegions = () => {
    return fetch(countryURL + "regions")
    .then(res => res.json())
}

const getUKDetails = () => {
    return fetch(countryURL + "/239")
    .then(res => res.json())
}

const getWishlist = () => {
    return fetch(wishlistURL)
    .then(res => res.json())
}

const removeFromWishlistDB = (id) => {
    return fetch(wishlistURL + id, {
        method:'DELETE'
    })
}

const addToWishlistDB = (flight) => {
    return fetch(wishlistURL, {
        method: 'POST',
        body: JSON.stringify(flight),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}


export {addCountries, getAllCountries, getCountriesWithLanguageAndRegion, getCountriesWithLanguage, getCountriesWithRegion, getAllLanguages, getAllRegions, getUKDetails, getWishlist, removeFromWishlistDB, addToWishlistDB}

