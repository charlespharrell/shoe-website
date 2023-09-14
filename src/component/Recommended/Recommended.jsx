import React from 'react'
import './Recommended.css'
import data from '../../Data/data'
function Recommended({selected, filterItems, setProductItems}) {
  return (
    <div className="reco">
      <h2>Recommended</h2>
      <div className="recommended-container">
        <button className="recommended" onClick={()=>setProductItems(data)} >All Products</button>
      {
        selected.map((ProductItem)=>(
              <button className="recommended" onClick={()=>{filterItems(ProductItem)}}>{ProductItem}</button>
        ))       
      }
      </div>
    </div>
  )
}

export default Recommended