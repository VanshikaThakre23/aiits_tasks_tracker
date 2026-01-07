import React, { useState } from 'react'
import { SquareMinus, SquarePlus ,Trash2 } from 'lucide-react';
import "./Cart.css"

const Cart = ({ cart,setCart }) => {


  return (
    <>
      <div className="cart-container">
        <div className="cart-heading">
          <h2>Your Cart</h2>
        </div>


        {
          cart.map(item => (
            <div className="cart-body"  key={item.id}>
              <div className="cart-item" >
                <div className="cartimg-img-container">
                  <img className='cartitem-img' src={item.image} alt="" />
                </div>

                <div className="cartimg-title-container">
                  <p className='cartitem-title'>{item.title}</p>
                </div>

                <div className="cart-item-price-container">
                  <p title='ABCDEFGH' className='cartitem-price'>Rs{item.price}</p>
                </div>

                <div className="cart-item-counter">
                  <SquarePlus  />
                   
                  <SquareMinus />

                  <Trash2 className='removeitem-btn'/>


                </div>

                {/* <div className="cart-item-total">
                  <p> {totalPrice(item.price).toFixed(2)}</p>
                </div> */}

              </div>
            </div>
          ))
        }
      </div>



    </>
  )
}

export default Cart