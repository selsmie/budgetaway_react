import {Link} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return(
        <ul className="links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    )
}

export default NavBar