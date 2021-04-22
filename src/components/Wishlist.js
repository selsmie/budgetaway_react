import "./Wishlist.css"

<<<<<<< HEAD
const Wishlist = ({wishlist}) => {
   
    const displayable = (wishlist) ? wishlist.map((item, index) => {
        return  <div key={index} className="item-container">
                    <h3>{item.name}</h3>
                    {/* <div className="detail-container"> */}
                        <p>Departure: {item.depAirport}</p>
                        <p>Arrival: {item.arrAirport}</p>
                        <p>Duration: {item.duration}</p>
                        <p>Price: £{item.price}</p>
                    {/* </div> */}
                    <input type="submit" value="Remove from List" className="wishlist-button"/>
                </div>
    }): "You Have No Journeys Saved."

    return (
        <section className="wishlist"> 
            <form>
            {displayable}
            </form>
        </section>
    )
}

=======
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
>>>>>>> develop

export default  Wishlist;