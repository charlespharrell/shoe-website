import React from 'react'
import data from '../../../Data/data'


function Price({selected4, filterItems4, setProductItems}) {
  return (
    <div className="radio-container">
        <div className="radio-header">Price</div>
        <label htmlFor="" className='sidebar-label-container'>
            <input type="radio" name='test' className='radio' onClick={()=>setProductItems(data)} />
            <span className="checkmark" ></span>
            <div className="cat-name">All</div>
            </label>
        {
          selected4.map((ProductItem)=>(
            <label htmlFor="" className='sidebar-label-container'>
            <input type="radio" name='test' className='radio' onClick={()=>filterItems4(ProductItem)} />
            <span className="checkmark" ></span>
            <div className="cat-name">${ProductItem}</div>
            </label>
            ))
          }
          
    </div>
  )
}

export default Price