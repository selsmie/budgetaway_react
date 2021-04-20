const CountryList = ({countries, onCountrySelect}) => {



    const countryDisplay = countries.map((country, index) => {
        return <option value={country.name} key={index}>{country.name}</option>
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
