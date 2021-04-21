import {useState} from "react"

const FlightsFilterAndButton = ({selectedCountry, onSearchSubmit}) => {

    const [departureAirport, setDepartureAirport] = useState("")
    const [destinationAirport, setDestinationAirport] = useState("")
    
    const airports = selectedCountry.airports.map((airport, index) => {
        return <option value={airport.id} key={index}>{airport.name}</option>
    })

    const defaultAirports = ["Edinburgh", "Glasgow", "Heathrow", "Stansted", "Gatwick", "Luton"]

    const defaults = defaultAirports.map((airport, index) => {
        return <option value={airport} key={index}>{airport}</option>
    })

    const handleDepAirportChange = (evt) => {
        setDepartureAirport(evt.target.value)
    }

    const handleDestAirportChange = (evt) => {
        setDestinationAirport(evt.target.value)
    }
    
    const handleSearchSubmit = (evt) => {
        evt.preventDefault()
        // console.log(departureAirport)
        // console.log(destinationAirport)
        // console.log(selectedCountry);
        onSearchSubmit(departureAirport, destinationAirport)
        setDepartureAirport("")
        setDestinationAirport("")
    }

    return (
        <div>
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
