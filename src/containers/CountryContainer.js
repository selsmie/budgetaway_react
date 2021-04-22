import SelectedCountryDetail from '../components/SelectedCountryDetail'

const CountryContainer = ({selectedCountry, onSearchSubmit, ukAirports}) => {
    
    return (
        <div>
            <SelectedCountryDetail selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit} ukAirports={ukAirports}/>
        </div>
    )
}

export default CountryContainer
