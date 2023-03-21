import React, { useEffect, useRef, useState } from 'react'

import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg'
import { useOutsideClick } from '../../hooks/useClickOutside'
import CustomInput from '../../ui/CustomInput/CustomInput'

import SearchResults from './components/SearchResults/SearchResults'

import './search.css'

const Search = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const searchRef = useRef<HTMLDivElement | null>(null)

  useOutsideClick(searchRef, handleSearchEnd)

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  })
  const searchHandler = () => setIsSearching(true)

  function handleSearchEnd() {
    setIsSearching(false)
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
      setIsSearching(false)
    }
  }

  return (
    <div ref={searchRef} className="search-input-container">
      <CustomInput
        icon={<SearchIcon />}
        value={searchValue}
        onChange={onSearch}
        onClick={searchHandler}
        type="text"
        placeholder="Search"
        className={`${isSearching ? 'search-input-active' : ''}`}
      />
      {isSearching && (
        <SearchResults
          searchValue={searchValue}
          isSearching={isSearching}
          handleResultSelect={handleSearchEnd}
        />
      )}
    </div>
  )
}

export default Search
