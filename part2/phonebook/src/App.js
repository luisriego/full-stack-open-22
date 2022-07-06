import React, { useState } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import List from './components/List'

const App = () => {
  const persons = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]
  // const [ persons, setPersons ] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ]) 
  // const [ newName, setNewName ] = useState('')
  // const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState('')


  // const addName = (event) => {
  //   event.preventDefault()
  //   const personObj = [{ name: newName, phone: newPhone }]
  //   console.log(persons)
  //   if (persons.some(item => item.name === newName)) {
  //     return alert(`${newName} is already added to phonebook`)
  //   }
  //   setPersons(persons.concat(personObj))
  //   setNewName('')
  //   setNewPhone('')

  // }

  // const handleNameChange = (event) => {
  //   setNewName(event.target.value)
  // }

  // const handlePhoneChange = (event) => {
  //   setNewPhone(event.target.value)
  // }

  // const handleSearchChange = (event) => {
  //   setSearch(event.target.value)
  // }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch}/>
      <h2>add a new</h2>
      <Form persons={persons} />
      {/* <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          phone: <input 
            value={newPhone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <h2>Numbers</h2>
      <List persons={persons} search={search}/>
      {/* <div>
        {persons.filter(person => person.name.includes(search)).map(filteredPerson => (
          <div key={filteredPerson.name}>{ `${filteredPerson.name} ${filteredPerson.number}` }</div>
        ))}
      </div> */}
    </div>
  )
}

export default App
