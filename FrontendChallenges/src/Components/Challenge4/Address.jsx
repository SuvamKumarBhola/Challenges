import React from 'react'

function Address({ formData, handleChange }) {
  return (
    <div className='step-content'>
        <h3>Step 2: Address Details</h3>
        <div className='input-group'>
            <lable>City: </lable>
            <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                placeholder='Enter City'
            />
        </div>
        <div className='input-group'>
            <lable>Zip Code: </lable>
            <input
                type='text'
                name='zipcode'
                value={formData.zip}
                onChange={handleChange}
                placeholder='Enter zip code'
            />
        </div>
    </div>
  )
}

export default Address