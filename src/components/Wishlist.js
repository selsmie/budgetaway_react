import "./Wishlist.css"

const Wishlist = (flight, wishlist) => {

    const wishlistDisplay = (wishlist) ? 
        wishlist.map((wishlist, index) => {
            return (

            <div className = "flight">
                <h2 id="flight-name">{flight.name}</h2>
                <div id="flight-details">
                    <p>Departure Airport: {flight.depAirport}</p>
                    <p>Arrival Airport: {flight.arrAirport}</p>
                    <p>Duration: {flight.duration}</p>
                    <p>Price: {flight.price}</p>
                </div>
            </div>
            )
    }) : null

    return (
        <div className="wishlist">
            {wishlistDisplay}
        </div>
    )
}

export default  Wishlist;