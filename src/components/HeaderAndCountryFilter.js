import CountryList from './CountryList'
import NavBar from "./NavBar"
import './HeaderAndCountryFilter.css'
import logo from "../logo.png"

const HeaderAndCountryFilter = ({countries, onCountrySelect}) => {

    const budgetClick = () => {

    }

    return (
        <header>
            <div className="title-links">
                <img src={logo} alt="logo"/>
                <div className="navbar">
                    <NavBar/>
                </div>
            </div>

            <div className="search-bar">
                    <select name="lanugages" id="languages">
                        <option value="disabled">Select Language</option>
                    </select>
                    <select name="regions" id="regions">
                        <option value="disabled">Select Region</option>
                    </select>
                <CountryList countries={countries} onCountrySelect={onCountrySelect}/> 
            </div>    
        </header>
    )
}

export default HeaderAndCountryFilter
