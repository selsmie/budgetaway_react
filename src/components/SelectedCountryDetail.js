import FlightsFilterAndButton from './FlightsFilterAndButton'
import CountryMap from './CountryMap'
import "./SelectedCountryDetails.css"

const SelectedCountryDetail = ({selectedCountry, onSearchSubmit}) => {

    const displayableDetails = (selectedCountry) ? 
    <div className="country-details">
    <h2 id="country-name">{selectedCountry.country_name}</h2>
    <img src={selectedCountry.flag} alt="flag" id="flag"/>
    
    <div className="details" >
        <p id="region">Region: {selectedCountry.region}</p>
        <p id="listable">Currencies: {selectedCountry.currencies.join(", ")}</p>
        <p id="listable">Languages: {selectedCountry.languages.join(", ")}</p>
    </div>
    <FlightsFilterAndButton selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit} id="buttons"/>
    <CountryMap selectedCoordinates={selectedCountry.coordinates} id="map"/>
    </div> : null


    return (
        <div>
            {displayableDetails}
        </div>
    )
}

export default SelectedCountryDetail
