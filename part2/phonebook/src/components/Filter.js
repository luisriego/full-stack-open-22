// import React, { useState } from 'react'

const Filter = ({search, setSearch}) => {
    // const [ search, setSearch ] = useState('')

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