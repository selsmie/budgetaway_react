const CountryList = ({countries}) => {

    const countryDisplay = countries.map((country, index) => {
        return <option value="{country}" key={index}>{country.country_name}</option>
    })

    return (
        <select name="countries-list" id="countries-list">
            {countryDisplay}
        </select>
    )
}

export default CountryList
