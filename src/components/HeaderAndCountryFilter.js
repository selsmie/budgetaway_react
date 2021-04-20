import CountryList from './CountryList'
import NavBar from "./NavBar"
import './HeaderAndCountryFilter.css'
import logo from "../logo.png"
import BudgetNav from "./BudgetNav"

const HeaderAndCountryFilter = ({countries, onCountrySelect, luckyDip}) => {

    const budgetClick = () => {

    }

    const handleLuckyDip = (evt) => {
        luckyDip()
    }

    return (
        <header>
            <div className="title-links">
                <div className="budget-link">
                    <BudgetNav/>
                </div>
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

                    <button className="lucky-dip" onClick={handleLuckyDip}>
                        <option countries={countries}>Lucky Dip</option>
                    </button>
            </div>    
        </header>
    )
}

export default HeaderAndCountryFilter
