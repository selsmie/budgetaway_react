import FlightsFilterAndButton from './FlightsFilterAndButton'
// import Currency from './Currency'
// import Language from './Language'


const SelectedCountryDetail = ({selectedCountry, onSearchSubmit}) => {

    const displayableDetails = (selectedCountry) ? 
    <div>
    <p>{selectedCountry.country_name}</p>
    <img src={selectedCountry.flag} alt="flag"/>
    <p>Region: {selectedCountry.region}</p>
    <p>Currencies: {selectedCountry.currencies[0]}</p>
    <p>Languages: {selectedCountry.languages}</p>
    <FlightsFilterAndButton selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit}/>
    </div> : null


    return (
        <div>
            {displayableDetails}
        </div>
    )
}

export default SelectedCountryDetail
