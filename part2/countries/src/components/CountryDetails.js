const CountryDetails = ({country}) => {
    const languages = []
        for (let value of Object.values(country.languages)) {
            languages.push(value)
        }

        return (
            <>
                <h2>{country.name.common}</h2> 
                <br/>
                <div>capital: {country.capital}</div> 
                <div>area: {country.area} km²</div> 
                <h3>languages</h3>
                <ul>
                    {
                        languages.map((language) => {
                            return <li key={language}>{language}</li>
                        })
                    }
                </ul>
                <img src={country.flags.svg} alt={country.name.common} width="100" />
            </> 
        )
}

export default CountryDetails