import "./FlightContainer.css"

const FlightContainer = ({flight, onAddToWishlist}) => {
    const handleAddToWishlist = (evt) => {
        evt.preventDefault()
        onAddToWishlist()
    }
    
    const displayableDetails = (flight) ? 
        <div className = "flight">
            <h2 id="flight-name">{flight.name}</h2>
            <div id="flight-details">
                <h4 id="departure">Departure Airport: {flight.depAirport}</h4>
                <h4 id="arrival">Arrival Airport: {flight.arrAirport}</h4>
                <h4 id="duration">Duration: {flight.duration} hours</h4>
                <h4 id="price">Price: £{flight.price}</h4>
            </div>
            <button className="flight-button" onClick={handleAddToWishlist}>Add to Wishlist</button>
        </div> : null
    return (
        <div>
            {displayableDetails}
        </div>
    )
}
export default FlightContainer
