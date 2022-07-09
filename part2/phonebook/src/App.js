import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Filter from './components/Filter'
import List from './components/List'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <Form persons={persons} setPersons={setPersons} />
      <List persons={persons} search={search} />
    </div>
  )
}

export default App
