const Search = ({persons, search}) => {


    return (
        <>
          <h2>Numbers</h2>
          <div>
            {persons.filter(person => person.name.includes(search)).map(filteredPerson => (
              <div key={filteredPerson.name}>{ `${filteredPerson.name} ${filteredPerson.phone}` }</div>
            ))}
          </div>
        </>
      )
}

export default Search