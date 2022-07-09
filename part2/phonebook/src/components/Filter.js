
const Filter = ({search, setSearch}) => {

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            Filter shown with: <input 
                value={search}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Filter