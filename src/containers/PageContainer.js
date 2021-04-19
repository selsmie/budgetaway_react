import { useState, useEffect } from 'react'
import HeaderAndCountryFilter from '../components/HeaderAndCountryFilter'
import CountryContainer from './CountryContainer'
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import {addCountries, getCountriesWithLanguageAndRegion, getCountriesWithLanguage, getCountriesWithRegion, getAllLanguages, getAllRegions} from "../services/DataServices"
// import {flight_key} from "../config"

const PageContainer = () => {
   
    const [rawCountries, setRawCountries] = useState([]);
    const [rawAirports, setRawAirports] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    // const [allLanguages, setAllLanguages] = useState([]);
    // const [allRegions, setAllRegions] = useState([]);
    const [allFilteredCountries, setAllFilteredCountries] = useState([]);
    // const [allFilteredFlights, setAllFilteredFlights] = useState([]);
    // const [selectedLanguage, setSelectedLanguage] = useState("");
    // const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [departureAirport, setDepartureAirport] = useState("");
    // const [selectedFlight, setSelectedFlight] = useState("");

    const filterEntryArray = (array) => {
        let newArray = []
        array.map((entry) => {
            return newArray.push(entry.name)
        })
        return newArray
    }

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then((data) => {
            setRawCountries(data.map((entry) => {
                return {country_name: entry.name, 
                    flag: entry.flag, 
                    coordinates: entry.latlng, 
                    region: (entry.subregion) ? entry.subregion : entry.region,
                    currencies: filterEntryArray(entry.currencies),
                    languages: filterEntryArray(entry.languages),
                    airports: []
                }
            }))
        })
    }, [])

    // useEffect(() => {
        
    //     for(let i = 0; i < 1; i++) {
    //         fetch(`http://api.aviationstack.com/v1/airports?access_key=${flight_key}`)
    //         .then(res => res.json())
    //         // .then(data => setRawAirports(data.data))
    //         .then(data => {
    //             setRawAirports(data.data.map((airport) => {
    //                 return {
    //                     airport: airport.airport_name,
    //                     country: airport.country_name
    //                 }
    //             }))
    //         })
    //     }
        
    // }, [rawCountries])


    // useEffect(() => {
    //     const countries = [...rawCountries]
    //     rawAirports.map((airport) => {
    //         const index = countries.indexOf((country) => country.country_name === airport.country)
    //         countries[index].airports.push(airport.name)
    //     })
    //     setRawCountries(countries)
    // }, [rawAirports, rawCountries])

    
    // iterate through all countries and save each country to the db
    // also populate allLanguages and allRegions
    useEffect(() => {
        // addCountries(allCountries)
        // setAllLanguages(getAllLanguages())
        // setAllRegions(getAllRegions())
    }, [allCountries])

    //get filtered countries list depending on which filter is used
    useEffect(() => {
    //     if (selectedLanguage && selectedRegion) {
    //         setAllFilteredCountries(getCountriesWithLanguageAndRegion(selectedLanguage, selectedRegion))
    //     }
    //     else if (selectedLanguage && !selectedRegion){
    //         setAllFilteredCountries(getCountriesWithLanguage(selectedLanguage))
    //     } 
    //     else if (!selectedLanguage && selectedRegion) {
    //         setAllFilteredCountries(getCountriesWithRegion(selectedRegion))
    //     } else {
            setAllFilteredCountries(allCountries)
    //     }
    // }, [selectedLanguage, selectedRegion, allCountries])
    }, [allCountries])

    const findCountry = (searchCountry, collection) => {
        return collection.find(({country_name}) => country_name === searchCountry)
    }

    const getSelectedCountry = () => {
        setSelectedCountry(findCountry(selectedCountryId, allCountries))
    }

    const selectCountry = submitted => {
        setSelectedCountryId(submitted)
    }

    useEffect(() => {
        getSelectedCountry()
    })

    const searchFlights = (departureAirport) => {
        setDepartureAirport(departureAirport)
    }

    return (
        // <Router>
        //     <>
        //         <HeaderAndCountryFilter countries={allFilteredCountries} selectedCountry={selectedCountry} onCountrySelect={selectCountry}/>
        //         <Switch>
        //             <Route exact path="/">
        //                 <CountryContainer countries={allFilteredCountries} selectedCountry={selectedCountry} onCountrySelect={selectCountry}/>
        //             </Route>
        //             {/* <Route path="/wishlist" component={WishlistContainer}/> */}
        //             {/* <Router path="/about" component={About}/> */}
        //         </Switch>
        //     </>
        // </Router>
        <>
        <HeaderAndCountryFilter countries={allFilteredCountries} selectedCountry={selectedCountry} onCountrySelect={selectCountry}/>
        <CountryContainer selectedCountry={selectedCountry} onSearchSubmit={searchFlights}/>
        </>
    )


}

export default PageContainer
