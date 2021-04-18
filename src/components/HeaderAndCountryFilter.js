import CountryList from './CountryList'
import './HeaderAndCountryFilter.css'

const HeaderAndCountryFilter = ({countries, onCountrySelect}) => {
    return (
        <header>
            <div className="title-links">
                <div className="budget">
                    <a href="/">Budgeting</a>
                </div>
                <h2 id="bud" className="title">Bud<span id="getaway" className="title">getAway</span></h2>
                <div className="navbar">
                    <a href="/">Home</a>
                    <a href="/">Wishlist</a>
                    <a href="/">About</a>
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
