import "./Wishlist.css"

const Wishlist = ({wishlist, onRemoveFromWishlist}) => {

const handleRemoveFromWishlist = (evt) => {
    evt.preventDefault()
    onRemoveFromWishlist(evt.target.value)
}
   
    const displayable = (wishlist.length) ? wishlist.map((item, index) => {
        return  <div key={index} className="item-container">
                    <h3>{item.name}</h3>
                        <p>Departure: {item.depAirport}</p>
                        <p>Arrival: {item.arrAirport}</p>
                        <p>Duration: {item.duration}</p>
                        <p>Price: £{item.price}</p>
                    <button className="wishlist-button" onClick={handleRemoveFromWishlist} value={item.id}>Remove from wishlist</button>
                </div>
    }): <p id="null-wishlist">"You Have No Journeys Saved."</p>

    return (
        <section className="wishlist"> 
            <form>
            {displayable}
            </form>
        </section>
    )
}

export default  Wishlist;