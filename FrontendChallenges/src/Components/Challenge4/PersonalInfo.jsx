import React from 'react'

function PersonalInfo({ formData, handleChange }) {
  return (
    <div className='step-content'>
        <h3>Step 1: Personal Info</h3>
        <div className='input-group'>
            <lable>First Name</lable>
            <input
                type='text'
                name='firstname'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='Enter the First Name'
            />
        </div>
        <div className='input-group'>
            <label>Last Name:</label>
            <input
                type='text'
                name='lastname'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Enter your last Name'
            />
        </div>
    </div>
  )
}

export default PersonalInfo