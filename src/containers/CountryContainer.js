import CountryList from '../components/CountryList'
import SelectedCountryDetail from '../components/SelectedCountryDetail'

const CountryContainer = ({countries}) => {
    
    return (
        <div>
            <p>countrycontainer</p>
            <CountryList countries={countries}/>
            <SelectedCountryDetail />
        </div>
    )
}

export default CountryContainer
