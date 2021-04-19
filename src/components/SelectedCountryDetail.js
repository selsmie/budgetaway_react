import FlightsFilterAndButton from './FlightsFilterAndButton'
import CountryMap from './CountryMap'
import "./SelectedCountryDetails.css"

const SelectedCountryDetail = ({selectedCountry, onSearchSubmit}) => {

    const affordability = () => {
        if (selectedCountry.region.match("Eastern Europe")){
            return "€€€"
        } else if (selectedCountry.region.match("Europe")){
            return "€€€€€"
        } else if (selectedCountry.region.match("Eastern Asia")){
            return "$$$$"
        } else if (selectedCountry.region.match("Southern Asia")){
            return "$"
        } else if (selectedCountry.region.match("Western Asia")){
            return "$$$$"    
        } else if (selectedCountry.region.match("Northern America")){
            return "$$$$$"
        } else if (selectedCountry.region.match("Southern America")){
            return "$$$"
        } else if (selectedCountry.region.match("Africa")){
            return "$$"
        } else if (selectedCountry.region.match("Australia")){
            return "$$$$$"
        } else if (selectedCountry.region.match("Caribbean")){
            return "$$$"
        } else if (selectedCountry.region.match("Melanesia")){
            return "$$"
        } else if (selectedCountry.region.match("Polynesia")){
            return "$$"
        }
        return "?"
    }

    const displayableDetails = (selectedCountry) ? 
    <div className="country-details">
        <h2 id="country-name">{selectedCountry.country_name}</h2>
        <img src={selectedCountry.flag} alt="flag" id="flag"/>
        <div className="details" >
            
            <p id="afford">Affordability: {affordability()}</p>
            <p id="region">Region: {selectedCountry.region}</p>
            <p class="listable">Currencies: {selectedCountry.currencies.join(", ")}</p>
            <p class="listable">Languages: {selectedCountry.languages.join(", ")}</p>
            <div id="buttons">
                <FlightsFilterAndButton selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit} />
            </div>
        </div>
        <div id="map">
            <CountryMap selectedCoordinates={selectedCountry.coordinates} />
        </div>
    </div> : null


    return (
        <div>
            {displayableDetails}
        </div>
    )
}

export default SelectedCountryDetail
