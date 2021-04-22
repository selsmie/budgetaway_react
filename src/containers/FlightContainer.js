import React from 'react'

const FlightContainer = (flight, onAddToWishlist) => {
    
    const handleAddToWishlist = (evt) => {
        evt.preventDefault()
        onAddToWishlist()
    }

    const displayableDetails = (flight) => {
        
        <div className = "flight">
            <h2 id="flight-name">{flight.name}</h2>
            <div id="flight-details">
                <p>Departure Airport: {flight.depAirport}</p>
                <p>Arrival Airport: {flight.arrAirport}</p>
                <p>Duration: {flight.duration}</p>
                <p>Price: {flight.price}</p>
            </div>
            <button className="flight-button" onClick={handleAddToWishlist}>Add to Wishlist</button>
        </div>
        
    }
    
    return (
        <>
            {displayableDetails}
        </>
    )
}

export default FlightContainer
