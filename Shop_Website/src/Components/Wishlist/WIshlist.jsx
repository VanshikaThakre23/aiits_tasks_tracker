import React from 'react'
import { ShoppingCart} from 'lucide-react';
import "./Wishlist.css"
 

const Wishlist = ({ wishlist , handleCart}) => {
  

  return (
    <>
      <div className="wish-container">
        <div className="wish-heading">
         <h2>Your Wishlist</h2>
        </div>

        <div className="wishcard-body">
          {
            wishlist.map(item=>(
              <div className="wish-body">
                <div className="wish-body-img">
                <img src={item.image} alt="" />
                </div>
                <h2 className='wishcard-title' title={item.title}>{item.title}</h2>
                <p>Rs . {item.price}</p>
                <button className='wishcard-btn' onClick={()=>handleCart(item)}>Add to Cart <ShoppingCart/></button>
              </div>
            ))
          }
        </div>

      </div>

    </>
  )
}

export default Wishlist