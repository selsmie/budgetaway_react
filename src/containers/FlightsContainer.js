const FlightContainer = ({flight, onAddToWishlist}) => {
    const handleAddToWishlist = (evt) => {
        evt.preventDefault()
        onAddToWishlist()
    }
    const displayableDetails = (flight) ? 
        <div className = "flight">
            <h2 id="flight-name">{flight.name}</h2>
            <div id="flight-details">
                <h6>Departure Airport: {flight.depAirport}</h6>
                <h6>Arrival Airport: {flight.arrAirport}</h6>
                <h6>Duration: {flight.duration}</h6>
                <h6>Price: {flight.price}</h6>
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
