import {useState} from "react"
import "./FlightsFilterAndButton.css"

const FlightsFilterAndButton = ({selectedCountry, onSearchSubmit, ukAirports}) => {

    const [departureAirport, setDepartureAirport] = useState("")
    const [destinationAirport, setDestinationAirport] = useState("")

    const defaults = ukAirports
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((airport, index) => {
        return <option value={airport.iata} key={index}>{airport.name}</option>
    })

    const airports = selectedCountry.airports
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((airport, index) => {
        return <option value={airport.iata} key={index}>{airport.name}</option>
    })

    const handleDepAirportChange = (evt) => {
        setDepartureAirport(evt.target.value)
    }

    const handleDestAirportChange = (evt) => {
        setDestinationAirport(evt.target.value)
    }
    
    const handleSearchSubmit = (evt) => {
        evt.preventDefault()
        onSearchSubmit(departureAirport, destinationAirport)
        setDepartureAirport("")
        setDestinationAirport("")
    }

    return (
        <div className="airport-selection">
            <form onSubmit={handleSearchSubmit}>
                <select name="departure-airport" id="departure-airport" onChange={handleDepAirportChange}>
                    <option value="disabled">Departure Airport</option>
                    {defaults}
                </select>
                <select name="dest-airport" id="dest-airport" onChange={handleDestAirportChange}>
                    <option value="disabled">Destination Airport</option>
                    {airports}
                </select>
                <input type="submit" value="Search Flights"/>
            </form>
        </div>
    )
}

export default FlightsFilterAndButton
