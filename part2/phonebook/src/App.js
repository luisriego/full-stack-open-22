import React, { useState } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Search from './components/Search'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 

  const [ search, setSearch ] = useState('')

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <Form persons={persons} setPersons={setPersons} />
      <Search persons={persons} search={search} />
    </div>
  )
}

export default App
