import { useState, useEffect } from 'react'
import HeaderAndCountryFilter from '../components/HeaderAndCountryFilter'
import CountryContainer from './CountryContainer'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from '../components/About'
import Wishlist from '../components/Wishlist'
import {addCountries, getCountriesWithLanguageAndRegion, getCountriesWithLanguage, getCountriesWithRegion, getAllLanguages, getAllCountries} from "../services/DataServices"
// import {flight_key} from "../config"
import countries from "../data/countries"
import airports from "../data/airports"


const PageContainer = () => {
   
    const [rawCountries, setRawCountries] = useState([]);
    // const [rawAirports, setRawAirports] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [allLanguages, setAllLanguages] = useState([]);
    const [allRegions, setAllRegions] = useState([]);
    const [allFilteredCountries, setAllFilteredCountries] = useState([]);
    // const [allFilteredFlights, setAllFilteredFlights] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [departureAirport, setDepartureAirport] = useState("");
    const [destinationAirport, setDestinationAirport] = useState("");
    // const [selectedFlight, setSelectedFlight] = useState("");

    // const filterEntryArray = (array) => {
    //     let newArray = []
    //     array.map((entry) => {
    //         return newArray.push(entry.name)
    //     })
    //     return newArray.filter(Boolean)
    // }

    // useEffect(() => {
    //     fetch("https://restcountries.eu/rest/v2/all")
    //     .then(res => res.json())
    //     .then((data) => {
    //         setRawCountries(data.map((entry) => {
    //             return {name: entry.name, 
    //                 flag: entry.flag, 
    //                 latitude: entry.latlng[0],
    //                 longitude: entry.latlng[1],
    //                 region: (entry.subregion) ? entry.subregion : entry.region,
    //                 currencies: filterEntryArray(entry.currencies),
    //                 languages: filterEntryArray(entry.languages),
    //                 airports: []
    //             }
    //         }))
    //     })
    // }, [])

    // useEffect(() => {
    //     const testArray = []

    //     for(let i = 0; i < 6401; i += 100) {
    //         testArray.push(
    //             fetch(`http://api.aviationstack.com/v1/airports?access_key=${flight_key}&offset=${i}`)
    //             .then(res => res.json())
    //             .then(data => data.data.map((airport) => {
    //                 return {
    //                     airport: airport.airport_name,
    //                     country: airport.country_name
    //                 }
    //             }))
    //         )
    //     }
    //     Promise.all(testArray)
    //     .then(data => console.log(JSON.stringify(data.flat())))

    const getAllRegions = () => {
        const set = new Set(allFilteredCountries.map((country) => {
            return country.region
        }))
        setAllRegions(Array.from(set))
    }

    useEffect(() => {
        getAllRegions()
    })
    
    // iterate through all countries and save each country to the db
    // also populate allLanguages and allRegions
    useEffect(() => {
        // if (allCountries.length > 0){
            // addCountries(rawCountries)
            
            getAllLanguages()
                .then(data => setAllLanguages(data))
        // }
    }, [])

    //get filtered countries list depending on which filter is used
    useEffect(() => {
        if (selectedLanguage && selectedRegion) {
            getCountriesWithLanguageAndRegion(selectedLanguage, selectedRegion)
                .then(data => setAllFilteredCountries(data))
        }
        else if (selectedLanguage && !selectedRegion){
            getCountriesWithLanguage(selectedLanguage)
                .then(data => setAllFilteredCountries(data))
        } 
        else if (!selectedLanguage && selectedRegion) {
            getCountriesWithRegion(selectedRegion)
                .then(data => setAllFilteredCountries(data))
        } else {
            getAllCountries()
                .then(data => setAllFilteredCountries(data))
        }
    }, [selectedLanguage, selectedRegion, allCountries])


    // useEffect(() => {
    //     airports.forEach((airport) => {
    //         if (airport.country) {
    //             const index = countries.findIndex((country) => country.name === airport.country)
    //             if (index !== -1) {
    //                 countries[index].airports.push(airport)
    //             }
    //         }
    //     })
    //     setRawCountries(countries)
    // }, [])


    const findCountry = (searchCountry, collection) => {
        return collection.find(({name}) => name === searchCountry)
    }

    const getSelectedCountry = () => {
        setSelectedCountry(findCountry(selectedCountryId, allFilteredCountries))
    }

    const selectCountry = submitted => {
        setSelectedCountryId(submitted)
    }

    // const selectDestinationAirport = submitted => {
    //     setDestinationAirportId(submitted)
    // }

    const luckyDip = () => {
        let randomValue = Math.floor(Math.random() * allFilteredCountries.length)
        let randomCountry = allFilteredCountries[randomValue]
        setSelectedCountryId(randomCountry.name)
        getSelectedCountry()
    }

    useEffect(() => {
        getSelectedCountry()
    })

    const searchFlights = (departureAirport, destinationAirport) => {
        setDepartureAirport(departureAirport)
        setDestinationAirport(destinationAirport)
    }

    const selectLanguage = submitted => {
        setSelectedLanguage(submitted)
    }


    const selectRegion = submitted => {
        setSelectedRegion(submitted)
    }

    return (
        <Router>
            <>
                <HeaderAndCountryFilter countries={allFilteredCountries} selectedCountry={selectedCountry} onCountrySelect={selectCountry} luckyDip={luckyDip} languages={allLanguages} regions={allRegions} onLanguageChange={selectLanguage} onRegionChange={selectRegion}/>
                <Switch>
                    <Route exact path="/">
                        <CountryContainer selectedCountry={selectedCountry} onSearchSubmit={searchFlights}/>
                    </Route>
                    <Route path="/wishlist" component={Wishlist}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </>
        </Router>
    )


}

export default PageContainer
