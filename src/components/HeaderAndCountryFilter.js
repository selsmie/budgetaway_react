import CountryList from './CountryList'
import NavBar from "./NavBar"
import './HeaderAndCountryFilter.css'
import logo from "../logo.png"

const HeaderAndCountryFilter = ({countries, onCountrySelect, luckyDip, languages, onRegionChange, onLanguageChange, regions}) => {

    const handleLuckyDip = (evt) => {
        luckyDip()
    }

    const displayRegions = (regions) ? 
        regions.sort().map((region, index) => {
            return <option value={region} key={index}>{region}</option>
        }) : null

    const displayLanguages = (languages) ?
        languages.sort((a, b) => a.name.localeCompare(b.name))
        .map((language, id) => {
            return <option value={language.name} key={id}>{language.name}</option>
        }) : null
        

    const handleLanguageSelect = (evt) => {
        onLanguageChange(evt.target.value)
    }

    const handleRegionSelect = (evt) => {
        onRegionChange(evt.target.value)
    }

    return (
        <header>
            <div className="title-links">
                <img src={logo} alt="logo"/>
                <div className="navbar">
                    <NavBar/>
                </div>
            </div>

            <div className="search-bar-selector">
                    <select className="languages" name="lanugages" id="languages" onChange={handleLanguageSelect}>
                        <option value="disabled">Select Language</option>
                        {displayLanguages}
                    </select>

                    <select className="regions" name="regions" id="regions" onChange={handleRegionSelect}>

                        <option value="disabled">Select Region</option>
                        {displayRegions}
                    </select>
                    <div className="nations">
                    <CountryList countries={countries} onCountrySelect={onCountrySelect}/>
                    </div>

                    <button className="lucky-dip" onClick={handleLuckyDip}>
                        <option countries={countries}>Lucky Dip</option>
                    </button>
            </div>


        </header>
    )
}

export default HeaderAndCountryFilter
