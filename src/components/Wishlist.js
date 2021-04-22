import "./Wishlist.css"

const Wishlist = ({wishlist, onRemoveFromWishlist}) => {

const handleRemoveFromWishlist = (evt) => {
    evt.preventDefault()
    onRemoveFromWishlist(evt.target.value)
}
   
    const displayable = (wishlist) ? wishlist.map((item, index) => {
        return  <div key={index} className="item-container">
                    <h3>{item.name}</h3>
                    {/* <div className="detail-container"> */}
                        <p>Departure: {item.depAirport}</p>
                        <p>Arrival: {item.arrAirport}</p>
                        <p>Duration: {item.duration}</p>
                        <p>Price: £{item.price}</p>
                    {/* </div> */}
                    <button className="wishlist-button" onClick={handleRemoveFromWishlist} value={item.id}>Remove from wishlist</button>
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

export default  Wishlist;