const CountryDetails = ({country}) => {
    return (
        Object.keys(country.languages).map((key, index) => (
            <div key={index}>
                <li>
                    {country.languages[key]}
                </li>
            </div>
        ))
    )
}

export default CountryDetails