import { useState, useEffect } from 'react'
import HeaderAndCountryFilter from '../components/HeaderAndCountryFilter'
import CountryContainer from './CountryContainer'
import FlightContainer from './FlightContainer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from '../components/About'
import Wishlist from '../components/Wishlist'
<<<<<<< HEAD
import {addCountries, getCountriesWithLanguageAndRegion, getCountriesWithLanguage, getCountriesWithRegion, getAllLanguages, getAllCountries, getUKDetails, getWishlist, removeFromWishlist, addToWishlistDB} from "../services/DataServices"
=======
import {addCountries, getCountriesWithLanguageAndRegion, getCountriesWithLanguage, getCountriesWithRegion, getAllLanguages, getAllCountries, getUKDetails, addToWishlistDB} from "../services/DataServices"
>>>>>>> develop
import {flight_key} from "../config"
import countries from "../data/countries"
import airports from "../data/airportscode"


const PageContainer = () => {
   
    // const [rawCountries, setRawCountries] = useState([]);
    // const [rawAirports, setRawAirports] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [allLanguages, setAllLanguages] = useState([]);
    const [allRegions, setAllRegions] = useState([]);
    const [allFilteredCountries, setAllFilteredCountries] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedFlight, setSelectedFlight] = useState("");
    const [ukAirports, setUKAirports] = useState([])
    const [wishlist, setWishlist] = useState("")

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
    //                     country: airport.country_name,
    //                     iata: airport.iata_code
    //                 }
    //             }))
    //         )
    //     }
    //     Promise.all(testArray)
    //     .then(data => console.log(JSON.stringify(data.flat())))
    // }, [])

    // const getAllRegions = () => {
    //     const set = new Set(allFilteredCountries.map((country) => {
    //         return country.region
    //     }))
    //     setAllRegions(Array.from(set))
    // }

    useEffect(() => {
        setAllRegions(Array.from(new Set(allFilteredCountries.map((country) => country.region))))
    }, [allFilteredCountries, selectedLanguage])

    
    // iterate through all countries and save each country to the db
    // useEffect(() => {
    //     if (rawCountries.length > 0){
    //         addCountries(rawCountries)
    //     }
    // }, [rawCountries])

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

    useEffect(() => {
        getAllLanguages()
            .then(data => setAllLanguages(data))
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

    const findCountry = (searchCountry, collection) => {
        return collection.find(({name}) => name === searchCountry)
    }

    const getSelectedCountry = () => {
        setSelectedCountry(findCountry(selectedCountryId, allFilteredCountries))
    }

    const selectCountry = submitted => {
        setSelectedCountryId(submitted)
    }

    const luckyDip = () => {
        let randomValue = Math.floor(Math.random() * allFilteredCountries.length)
        let randomCountry = allFilteredCountries[randomValue]
        setSelectedCountryId(randomCountry.name)
        getSelectedCountry()
    }

    useEffect(() => {
        getSelectedCountry()
    })

    const durationCalculation = (depTime, arrTime) => {
        let depHoursSplit = depTime.split("")
        let depHours = parseInt(depHoursSplit.slice(11, 13).join(""))

        let arrHoursSplit = arrTime.split("")
        let arrHours = parseInt(arrHoursSplit.slice(11, 13).join(""))

        if (arrHours - depHours > 0) {
            return arrHours - depHours
        } else {
            arrHours += 24
            return arrHours - depHours
        }
    }

    const priceCalculation = (time) => {
        return time * 100
    }

    const searchFlights = (departureAirport, destinationAirport) => {
        fetch(`http://api.aviationstack.com/v1/flights?access_key=${flight_key}&dep_iata=${departureAirport}&arr_iata=${destinationAirport}&limit=1`)
        .then(res => res.json())
        .then(data => 
            {
            setSelectedFlight(
                {
                    name: selectedCountry.name,
                    depAirport: data.data[0].departure.airport,
                    arrAirport: data.data[0].arrival.airport,
                    duration: durationCalculation(data.data[0].departure.scheduled, data.data[0].arrival.scheduled),
                    price: priceCalculation(durationCalculation(data.data[0].departure.scheduled, data.data[0].arrival.scheduled))
                }
            )
        }
        )
    }

    const addToWishlist = () => {
        addToWishlistDB(selectedFlight)
    }

    const selectLanguage = submitted => {
        setAllFilteredCountries([])
        setAllRegions([])
        setSelectedRegion("")
        setSelectedCountry("")
        setSelectedCountryId("")
        setSelectedLanguage(submitted)
    }

    const selectRegion = submitted => {
        setSelectedRegion(submitted)
    }

    useEffect(() => {
        getUKDetails()
            .then(data => setUKAirports(data.airports))
    }, [])

    useEffect(() => {
        getWishlist()
            .then(data => setWishlist(data))
    }, [wishlist, allFilteredCountries])

    const addToWishlist = () => {
        addToWishlistDB(selectedFlight)
        setWishlist([...wishlist, selectedFlight])
    }

    return (
        <Router>
            <>
                <HeaderAndCountryFilter countries={allFilteredCountries} selectedCountry={selectedCountry} onCountrySelect={selectCountry} luckyDip={luckyDip} languages={allLanguages} regions={allRegions} onLanguageChange={selectLanguage} onRegionChange={selectRegion}/>
                <Switch>
                    <Route exact path="/">
                        <CountryContainer selectedCountry={selectedCountry} onSearchSubmit={searchFlights} ukAirports={ukAirports}/>
<<<<<<< HEAD
                        <FlightsContainer flight={selectedFlight} onAddToWishlist={addToWishlist}/>
                    </Route>
                    <Route path="/wishlist" > 
                        <Wishlist wishlist = {wishlist}/>
=======
                        <FlightContainer flight={selectedFlight} onAddToWishlist={addToWishlist}/>
>>>>>>> develop
                    </Route>
                    <Route path="/about" component={About}/>
                </Switch>
            </>
        </Router>
    )
}

export default PageContainer
