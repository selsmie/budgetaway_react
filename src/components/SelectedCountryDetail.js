import FlightsFilterAndButton from './FlightsFilterAndButton'
import CountryMap from './CountryMap'
import "./SelectedCountryDetails.css"

const SelectedCountryDetail = ({selectedCountry, onSearchSubmit, ukAirports}) => {

    const affordability = () => {
        if (selectedCountry.name === "United Kingdom of Great Britain and Northern Ireland") {
            return "£££££"
        } else if (selectedCountry.region.match("Eastern Europe")){
            return "€€€"
        } else if (selectedCountry.region.match("Southern Europe")){
            return "€€€€"
        } else if (selectedCountry.region.match("Europe")){
            return "€€€€€"
        } else if (selectedCountry.region.match("Eastern Asia")){
            return "$$$$"
        } else if (selectedCountry.region.match("Southern Asia")){
            return "$"
        } else if (selectedCountry.region.match("Central Asia")){
            return "$$$"
        } else if (selectedCountry.region.match("Western Asia")){
            return "$$$$"    
        } else if (selectedCountry.region.match("Northern America")){
            return "$$$$$"
        } else if (selectedCountry.region.match("South America")){
            return "$$$"
        } else if (selectedCountry.region.match("Central America")){
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

    const displayArray = array => {
        const newArray = []
        array.forEach((item) => newArray.push(item.name))
        return newArray
    }

    const displayableDetails = (selectedCountry) ? 
    <div className="country-details">
        <h2 id="country-name">{selectedCountry.name}</h2>
        <img src={selectedCountry.flag} alt="flag" id="flag"/>
        <div className="details" >
            
            <p id="afford">Estimate Cost: {affordability()}</p>
            <p id="region">Region: {selectedCountry.region}</p>
            <p className="listable">Currencies: {displayArray(selectedCountry.currencies).join(", ")}</p>
            <p className="listable">Languages: {displayArray(selectedCountry.languages).join(", ")}</p>
            <div id="detail-buttons">
                <FlightsFilterAndButton selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit} ukAirports={ukAirports}/>
            </div>
        </div>
        <div id="map">
            <CountryMap selectedCoordinates={[selectedCountry.latitude, selectedCountry.longitude]} />
        </div>
    </div> : null


    return (
        <div>
            {displayableDetails}
        </div>
    )
}

export default SelectedCountryDetail
