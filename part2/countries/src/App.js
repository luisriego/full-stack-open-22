import {useState, useEffect} from 'react'
import axios from 'axios'
import List from './components/List'
import Filter from './components/Filter'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filter = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
		<Filter search={search} setSearch={setSearch} />
		<List countries={filter} />
    </div>
  )
}

export default App;
