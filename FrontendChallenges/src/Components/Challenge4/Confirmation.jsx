import React from 'react'

function Confirmation({formData}) {
  return (
    <div className='step-content'>
        <h3>Step 3: Review & Confirm</h3>
        <div className='summary'>
            <p><strong>Name</strong>{formData.firstName} {formData.lastName}</p>
            <p><strong>City</strong>{formData.city}</p>
            <p><strong>Zip</strong>{formData.zip}</p>
        </div>
    </div>
  )
}

export default Confirmation