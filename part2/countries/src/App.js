import {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './components/Form'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filter = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
		find countries <input 
		value={search}
		onChange={handleSearchChange} />
		<Form countries={filter} />
    </div>
  );
}

export default App;
