const List = ({persons, search}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {persons.filter(person => person.name.includes(search)).map(filteredPerson => (
            <div key={filteredPerson.name}>{ `${filteredPerson.name} ${filteredPerson.number}` }</div>
            ))}
        </div>
    )
}

export default List