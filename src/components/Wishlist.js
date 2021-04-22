import "./Wishlist.css"

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


export default  Wishlist;