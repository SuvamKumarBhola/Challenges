import React from 'react'

function SearchBar({value, onChange}) {
  return (
    <div style={{marginBottom:'20px'}}>
        <input
            type='text'
            placeholder='Search Fruits'
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            style={{width:'100%', padding:'12px', fontSize:'16px'}}
        />
    </div>
  )
}

export default SearchBar