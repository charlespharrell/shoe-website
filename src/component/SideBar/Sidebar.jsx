import React from 'react'
import Category from './Category/Category'
import Color from './Color/Color'
import Price from './Price/Price'
import './Sidebar.css'

function Sidebar( {sidebarcontainer, selected2, selected3, selected4, filterItems4, filterItems2,setProductItems, filterItems3}) {
  return (
    <div className={sidebarcontainer}>
        <Category 
          selected2={selected2}
          setProductItems={setProductItems}
          filterItems2={filterItems2}
          />
        <Price setProductItems={setProductItems} filterItems4={filterItems4} selected4={selected4}/>
        <Color selected3={selected3} setProductItems={setProductItems} filterItems3={filterItems3}/>
    </div>
  )
}

export default Sidebar