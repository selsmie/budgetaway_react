// import CountryList from './CountryList'
import HeaderAndCountryFilter from './HeaderAndCountryFilter'

// const randomValue = CountryList[Math.flood(Math.random() * CountryList.length)]

import {Link} from "react-router-dom"

const LuckyDip = () => {
    return(
        <div className="lucky-dip">
            <Link to="/HeaderAndCountryFilter">Lucky Dip</Link>
        </div>
    )
}

export default LuckyDip