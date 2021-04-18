import FlightsFilterAndButton from './FlightsFilterAndButton'
// import Currency from './Currency'
// import Language from './Language'

const SelectedCountryDetail = ({selectedCountry}) => {

    // const displayCurrencies =
    //     selectedCountry.currencies.map((currency, index) => {
    //         return <Currency key={index} currency={currency}/>
    //     })

    

    // const displayLanguages = 
    //     selectedCountry.languages.map((language, index) => {
    //         return <Language key={index} language={language}/>
    //     })


    const displayable = (selectedCountry) ? 
    <div>
    <p>{selectedCountry.country_name}</p>
    <img src={selectedCountry.flag} alt="flag"/>
    <p>Region: {selectedCountry.region}</p>
    {/* {displayCurrencies}
    {displayLanguages} */}
    <p>{selectedCountry.languages}</p>
    <p>{selectedCountry.currencies}</p>
    <FlightsFilterAndButton />
    </div> : null

    return (
        <div>
            {displayable}
        </div>
    )
}

export default SelectedCountryDetail
