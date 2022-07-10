import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './component/List'
import Filter from './component/Filter'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => { 
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter search={search} setSearch={setSearch} />
      <br/>
      <List countries={countries} search={search} />
    </div>
  )
}

export default App
