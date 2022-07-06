import React, { useState } from 'react'

const Form = (personsArray) => {
  const [ persons, setPersons ] = useState(personsArray.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObj = [{ name: newName, phone: newPhone }]
    if (persons.some(item => item.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewPhone('')

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  return(
    <form onSubmit={addName}>
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
    </form>
  )
}

export default Form