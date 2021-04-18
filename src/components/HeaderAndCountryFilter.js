import CountryList from './CountryList'

const HeaderAndCountryFilter = ({countries, onCountrySelect}) => {
    return (
        <>
            <p>headercountryfilter</p>    
            <CountryList countries={countries} onCountrySelect={onCountrySelect}/>        
        </>
    )
}

export default HeaderAndCountryFilter
