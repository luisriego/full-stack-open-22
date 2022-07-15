const Filter = ({search, setSearch}) => {
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
      }

    return (
        <>
            find countries <input 
            value={search}
            onChange={handleSearchChange} />
        </>
      );
}

export default Filter