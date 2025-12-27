import React from 'react'

function SearchBar({value, onChange, debouncedValue}) {
  return (
    <div style={{marginBottom:'20px'}}>
        <input
            type='text'
            placeholder='Search Fruits'
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            style={{width:'100%', padding:'12px', fontSize:'16px'}}
        />
        <small style={{color:'#888'}}>
          Filtering For: {debouncedValue}
        </small>
    </div>
  )
}

export default SearchBar