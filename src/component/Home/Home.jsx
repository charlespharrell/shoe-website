import React from 'react'
import './Home.css'
import Sidebar from '../SideBar/Sidebar'
import Recommended from '../Recommended/Recommended'
import Products from '../../Products'


function Home(
              {ProductItems,
               handleAddProduct,
               selected,
               filterItems,
               setProductItems,
               selected2,
               filterItems2,
               selected3,
               filterItems3,
               selected4,
               filterItems4,
               handleSidebar,
               menu,
               sidebarcontainer, input
              }) {
  return (
    <div className='home'>
      <div className='hamburger' onClick={handleSidebar}>{menu}</div>
        <Sidebar 
                    sidebarcontainer={sidebarcontainer}
                    filterItems3={filterItems3} 
                    selected2={selected2} 
                    selected3={selected3} 
                    setProductItems={setProductItems} 
                    filterItems2={filterItems2}
                    selected4={selected4}
                    filterItems4={filterItems4}
          />
        <div className="home-right">
          <Recommended
                     selected={selected}
                     filterItems={filterItems} 
                     setProductItems={setProductItems}
                     />

          <Products 
                    ProductItems={ProductItems} 
                    handleAddProduct={handleAddProduct}
                    input ={input}
                     />
        </div>
    </div>
  )
}

export default Home