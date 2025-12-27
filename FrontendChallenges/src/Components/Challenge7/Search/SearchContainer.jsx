import React, { useState } from 'react'
import DATA_LIST from '../data/Data'
import SearchBar from './SearchBar'
import ResultList from './ResultList'
import useDebounce from '../hooks/useDebounce'

function SearchContainer() {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 300)

    const filteredItems = DATA_LIST.filter(item=> item.toLowerCase().includes(debouncedQuery.toLowerCase()))

  return (
    <div>
        <h2>Industry Search</h2>
        <SearchBar query={query} onChange={setQuery} debouncedValue={debouncedQuery} />
        <ResultList items={filteredItems} highlightTerm={debouncedQuery} />
    </div>
  )
}

export default SearchContainer