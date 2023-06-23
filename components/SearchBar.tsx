'use client'

const SearchBar = () => {

    const handleSearch = () => {
        console.log('test search')
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            
        </div>
    </form>
  )
}

export default SearchBar