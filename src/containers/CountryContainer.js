import CountryList from '../components/CountryList'
import SelectedCountryDetail from '../components/SelectedCountryDetail'

const CountryContainer = ({countries, selectedCountry, onCountrySelect}) => {
    
    return (
        <div>
            <p>countrycontainer</p>
            <CountryList countries={countries} onCountrySelect={onCountrySelect}/>
            <SelectedCountryDetail selectedCountry={selectedCountry}/>
        </div>
    )
}

export default CountryContainer
