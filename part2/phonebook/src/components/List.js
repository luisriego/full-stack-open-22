const List = ({persons, search}) => {
    <div>
        {persons.filter(person => person.name.includes(search)).map(filteredPerson => (
            <div key={filteredPerson.name}>{ `${filteredPerson.name} ${filteredPerson.number}` }</div>
        ))}
    </div>
}

export default List