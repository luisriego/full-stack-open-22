import React, { useState } from 'react'

const Form = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const personObj = [{ name: newName, phone: newPhone }]
        console.log(persons)
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

    return (
        <div>
          <h2>add a new</h2>
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
        </div>
      )
}

export default Form
