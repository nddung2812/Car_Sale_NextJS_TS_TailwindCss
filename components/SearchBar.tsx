'use client'

const SearchBar = () => {

    const handleSearch = () => {
        console.log('test search')
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>SearchBar</form>
  )
}

export default SearchBar