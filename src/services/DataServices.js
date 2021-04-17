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

export {addCountry}