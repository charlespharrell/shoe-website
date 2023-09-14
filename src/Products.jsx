import React from 'react'
import { AiFillStar } from "react-icons/ai";

function Products({ProductItems, handleAddProduct, input}) {
    
  return (
    <div className="products-container">
        {ProductItems
        .filter((ProductItem)=>{
            return input.toLowerCase()===''
            ? ProductItem 
            : ProductItem.title.toLowerCase().includes(input)
        })
        
        .map((ProductItem)=>(
            <div className="card" key={ProductItem.id}>
                <div className="img-container">
                    <img
                     className='product-images'
                     src={ProductItem.img}
                      alt={ProductItem.name} />
                </div>
                <div className="products-title">{ProductItem.title}</div>
                <div className="star">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                </div>
                <div className="product-review">{ProductItem.reviews}</div>
                <div className="price-container">
                    <del className="product-previous-price">{ProductItem.prevPrice}  </del>
                    <span className='product-new-price'>${ProductItem.newPrice}</span>
                </div>
                <button className='addtocart' onClick={()=>handleAddProduct(ProductItem)}>Add to Cart</button>          
            </div>
        ))

        }
    </div>
  )
}

export default Products