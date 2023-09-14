import React from 'react'
import './Cart.css'

const Cart=({
              cartItems,
              handleAddProduct,
              handleCartClearance, 
              handleRemove,
              handleCheckout})=> {
  const totalPrice = cartItems.reduce(
    (price, item)=> price + item.quantity * item.newPrice, 0
  )
 
  return (
    <div className="cart-container">
      <div className="cart-headers">Cart Items</div>
      <div>
        <div className="cart-con">
          <div class="cart-row cart-header">
                        <div class="cell item-header">Item</div>
                        <div class="cell">Quantity</div>
                        <div class="cell">Subtotal</div>                       
          </div>
          
      {
      cartItems.length === 0 && (
        <div className='cart-empty'>No items are added</div>
      )}

        {
        cartItems.map((item)=>(
          <div key={item.id}className='cart-list'>
            <div className="item-con">
            <img
             src={item.img} alt=""
             className='cart-image'
              />
              <div className="item-subcon">
                <div className="cart-name cell">{item.title}</div>
                <div className="cart-amount">${item.newPrice}</div>
              </div>

            </div>
            <div className="cart-function">
              <button className="cart-add" onClick={()=>handleAddProduct(item)}>+</button>
              <div className='qty'>{item.quantity}</div>
              <button className='cart-remove' onClick={()=>handleRemove(item)}>-</button>
            </div>
            <div className="cart-price">
                ${item.quantity * item.newPrice}
            </div>
          </div>
        ))}
        </div>
            <div className="cart-total">
            {
            cartItems.length >=1 &&(
              <button className="clear-cart"onClick={handleCartClearance}>Clear Cart</button>
          )
        }   
         {
            cartItems.length >=1 &&( 
              <div>
                <div className="total">Total Price: ${totalPrice}</div>
                <button className='checkout' onClick={handleCheckout}>Proceed to checkout</button>
              </div>
                   
        )
      } 
          </div>


      </div>
    </div>
  )
}

export default Cart