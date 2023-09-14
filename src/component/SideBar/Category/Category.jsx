import React from 'react'
import './Category.css'
import data from '../../../Data/data'



function Category({selected2, filterItems2, setProductItems}) {
  return (
    <div className="radio-container">
      <div className="radio-header"> Category</div>
      <div>
      <label htmlFor="" className='sidebar-label-container'>
            <input type="radio" name='test' className='radio' onClick={()=>setProductItems(data)} />
            <span className="checkmark" ></span>
            <div className="cat-name">All</div>
            </label>
        {
          selected2.map((ProductItem)=>(
            <label htmlFor="" className='sidebar-label-container'>
            <input type="radio" name='test' className='radio' onClick={()=>filterItems2(ProductItem)} />
            <span className="checkmark" ></span>
            <div className="cat-name">{ProductItem}</div>
            </label>
            ))
          }
    </div>
      
        {/* <Radio category={category}/>
        <Radio/>
        <Radio/>
        <Radio/>
        <Radio/> */}
    </div>

    
  )
}

export default Category