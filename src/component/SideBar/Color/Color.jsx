import React from 'react'
import './Color.css'
import data from '../../../Data/data'

function Color({selected3, setProductItems, filterItems3}) {
  return (
    <div className="radio-container">
    <div className="radio-header">Color</div>
    <label htmlFor="" className='sidebar-label-container'>
            <input type="radio" name='test' className='radio' onClick={()=>setProductItems(data)} />
            <span className="checkmark" ></span>
            <div className="cat-name">All</div>
            </label>
        {
          selected3.map((ProductItem)=>(
            <label htmlFor="" className='sidebar-label-container'>
            <input type="radio" name='test' className='radio' onClick={()=>filterItems3(ProductItem)} />
            <span className="checkmark" ></span>
            <div className="cat-name">{ProductItem}</div>
            </label>
            ))
          }
      
</div>
  )
}

export default Color