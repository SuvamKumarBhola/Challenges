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
            <div style={{ marginBottom: "20px" }}>
                <input
                    type='text'
                    value={inputValue}
                    onClick={(e) => setInputValue(e.target.value)}
                    placeholder='Enter Items' />
                <button onClick={handleItems}>Add Item</button>
                <button onClick={handleClear}>Clear List</button>
            </div>
            {
                items.length === 0 ?
                    (<p>No items to Display</p>)
                    : (
                        <ul>
                            {
                                items.map((item) => {
                                    return (
                                        <li key={item.id}>{item.text}
                                            <button onClick={() => handleDelete(item.id)}>X</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
            }
        </div>
    )
}

export default DynamicList