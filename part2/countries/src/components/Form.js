import CountryDetails from "./CountryDetails"

const Form = ({countries}) => {

    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div> 
            )
    }

    if (countries.length === 1) {
        // const country = countries[0]
        // const languages = []
        // for (let value of Object.values(country.languages)) {
        //     languages.push(value)
        // }

        return (
            <CountryDetails country={countries[0]} />
            )
    }

    return (
        countries.map(country => 
            <div key={country.name.common}>
                {country.name.common}
            </div> 
        )
    )
}

export default Form