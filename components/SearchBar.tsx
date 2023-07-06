'use client'
import { useState } from 'react'

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const handleSearch = () => {
        console.log('test search')
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
              manufacturer = {manufacturer}
              setManufacturer = {setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar