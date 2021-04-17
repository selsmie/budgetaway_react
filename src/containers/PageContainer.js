import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HeaderAndCountryFilter from '../components/HeaderAndCountryFilter'
import CountryContainer from './CountryContainer'

const PageContainer = () => {
   
    const [allCountries, setAllCountries] = useState([]);
    // const [allLanguages, setAllLanguages] = useState([]);
    // const [allRegions, setAllRegions] = useState([]);
    // const [allFilteredCountries, setAllFilteredCountries] = useState([]);
    // const [allFilteredFlights, setAllFilteredFlights] = useState([]);
    // const [selectedLanguage, setSelectedLanguage] = useState("");
    // const [selectedRegion, setSelectedRegion] = useState("");
    // const [selectedCountryId, setSelectedCountryId] = useState("");
    // const [selectedCountry, setSelectedCountry] = useState("");
    // const [departureAirport, setDepartureAirport] = useState("");
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
            setAllCountries(data.map((entry) => {
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

    return (
        <>
            <p>pagecontainer</p>
            <HeaderAndCountryFilter />
            <CountryContainer />
        </>
    )


}

export default PageContainer
