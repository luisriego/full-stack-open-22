import CountryDetails from "./CountryDetails"

const List = ({countries, setSearch}) => {

    const handleView = (country) => {
       setSearch(country)
    }

    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div> 
            )
    }

    if (countries.length === 1) {
        return (
            <CountryDetails country={countries[0]} />
            )
    }

    return (
        countries.map(country => 
            <div key={country.name.common}>
                {country.name.common} 
                <button onClick={() => handleView(country.name.common)} type="button">view</button>
            </div> 
        )
    )
}

export default List