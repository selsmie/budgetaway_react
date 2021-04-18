const CountryList = ({countries, onCountrySelect}) => {

    const countryDisplay = countries.map((country, index) => {
        return <option value={country.country_name} key={index}>{country.country_name}</option>
    })

    const handleSelect = (evt) => {
        onCountrySelect(evt.target.value)
    }

    return (
        <form>
            <select name="countries-list" id="countries-list" onChange={handleSelect}>
                <option value="disabled">Select a Country</option>
                {countryDisplay}
            </select>
        </form>
    )
}

export default CountryList
