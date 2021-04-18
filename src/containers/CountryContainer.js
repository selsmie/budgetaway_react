// import CountryList from '../components/CountryList'
import SelectedCountryDetail from '../components/SelectedCountryDetail'

const CountryContainer = ({selectedCountry, onSearchSubmit}) => {
    
    return (
        <div>
            <p>countrycontainer</p>
            {/* <CountryList countries={countries} onCountrySelect={onCountrySelect}/> */}
            <SelectedCountryDetail selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit}/>
        </div>
    )
}

export default CountryContainer
