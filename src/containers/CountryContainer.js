import SelectedCountryDetail from '../components/SelectedCountryDetail'

const CountryContainer = ({selectedCountry, onSearchSubmit}) => {
    
    return (
        <div>
            <SelectedCountryDetail selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit}/>
        </div>
    )
}

export default CountryContainer
