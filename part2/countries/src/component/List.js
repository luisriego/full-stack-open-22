import CountryDetails from './CountryDetails'

const List = ({countries, search}) => {
    const filteredCountries = countries.filter(country => country.name.common.includes(search))

    if (filteredCountries.length > 10) {
        return ('Too many matches, specify another filter')
    }

    if (filteredCountries.length === 1) {
        return (
            <>
                {filteredCountries.map(country => (
                    <div key={country.name.common}>
                        <h2>{country.name.common}</h2>
                        <div>capital {country.capital}</div>
                        <div>area {country.area}</div>
                        <h3><b>languages</b></h3>
                        <ul>
                            <CountryDetails country={country} />
                        </ul>
                        
                        <img src={country.flags.png} alt={country.name.common} />
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            {filteredCountries.map(country => (
                <div key={country.name.common}>{ `${country.name.common}` }</div>
            ))}
        </>
    )
}

export default List