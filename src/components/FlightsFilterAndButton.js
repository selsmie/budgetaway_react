import {useState} from "react"

const FlightsFilterAndButton = ({selectedCountry, onSearchSubmit}) => {

    const [departureAirport, setDepartureAirport] = useState("")
    
    const airports = selectedCountry.airports.map((airport, index) => {
        // return <option value={airport.airport_name} key={index}>{airport.airport_name}</option>
        return <option value={airport} key={index}>{airport}</option>
    })

    const defaultAirports = ["Edinburgh", "Glasgow", "Heathrow", "Stansted", "Gatwick", "Luton"]

    const defaults = defaultAirports.map((airport, index) => {
        return <option value={airport} key={index}>{airport}</option>
    })

    const handleDepAirportChange = (evt) => {
        setDepartureAirport(evt.target.value)
    }
    
    const onSearchFlights = (evt) => {
        evt.preventDefault()
        onSearchSubmit(departureAirport)
        setDepartureAirport("")
    }

    return (
        <div>
            <form onSubmit={onSearchFlights}>
                <select name="departure-airport" id="departure-airport" onChange={handleDepAirportChange}>
                    <option value="disabled">Departure Airport</option>
                    {airports}
                    {defaults}
                </select>
                <input type="submit" value="Search Flights"/>
            </form>
        </div>
    )
}

export default FlightsFilterAndButton
