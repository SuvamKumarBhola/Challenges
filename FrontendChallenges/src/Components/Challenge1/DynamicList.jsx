import React, { useState } from 'react'

function DynamicList() {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleItems = () => {
        if (!inputValue.trim()) return;
        const newItem = {
            id: Date.now(),
            text: inputValue
        };
        setItems([...items, newItem])
        setInputValue('');
    };
    const handleDelete = (idToDelete) => {
        setItems(items.filter((item) => item.id !== idToDelete))
    };
    const handleClear = () => {
        setItems([])
    }

    return (
        <div
            style={{
                padding: "20px",
                fontFamily: "sans-serif"
            }}>
                <h2>Dynamic List Manager</h2>
                <div style={{marginBottom:"20px"}}>
                    <input
                        type='text'
                        value={inputValue}
                        onClick={(e)=> setInputValue(e.target.value)}
                        placeholder='Enter Items'/>
                        <button onClick={handleItems}>Add Item</button>
                        <button onClick={handleClear}>Clear List</button>
                </div>
        </div>
    )
}

export default DynamicList