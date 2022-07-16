import {useState, useEffect} from 'react'
import axios from 'axios'

const CountryDetails = ({country}) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    const languages = []

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
            .then(response => {
                setWeather(response.data.current)
          })
      }, [])

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

            <h3>Weather in {country.capital}</h3>
            <div>temperature: {weather.temperature} celsius</div>
            <img 
                src={weather.weather_icons} 
                alt={country.capital}/>
            <div>wind {weather.wind_speed} mph direction {weather.wind_dir}</div>
        </> 
    )
}

export default CountryDetails