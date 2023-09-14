import React from 'react'
import './NavBar.css'
import { AiFillHome, AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom'

function NavBar({cartItems, FilterNames, setinput}) {
  return (
    <nav>
        {/* <div className="Faminta">Faminta</div> */}
        <input className='input' type="text" onChange={(e)=>setinput(e.target.value)} placeholder='search shoes' />
        <div className="link-container">
            <Link className='link' to ='/'><AiFillHome/></Link>
            <Link className='link cartt' to ='/cart' >
              <div className="cart-num">
              {
                cartItems.length === 0 ? "": cartItems.length
              }
              </div><AiOutlineShoppingCart/></Link>
            <Link className='link' to ='/signup' >
              <AiOutlineUserAdd />
             </Link>
            
        </div>
    </nav>
  )
}

export default NavBar