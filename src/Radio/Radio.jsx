import React from 'react'

function Radio() {
  return (
    <div>
        <label htmlFor="" className='sidebar-label-container'>
            <input type="radio" name='test' className='radio' />
            <span className="checkmark"></span>All
        </label>
    </div>
  )
}

export default Radio