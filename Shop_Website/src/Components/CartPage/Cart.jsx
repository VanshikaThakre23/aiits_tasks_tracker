import React, { useState } from 'react'
import { SquareMinus, SquarePlus, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
import "./Cart.css"

const Cart = ({ cart, setCart, updateQuantity }) => {

  const removeCartItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.info("item removed from cart")
  }

  return (
    <>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-cart-text"> Ohh No !!! Your cart is empty 😢 </p>
        ) : (
          <>
            <div className="cart-heading">
              <h2>Your Cart</h2>
            </div>


            {cart.map((item, index) => (
              <div className="cart-body" key={index}>
                <div className="cart-item">
                  <div className="cartimg-img-container">
                    <img className="cartitem-img" src={item.image} alt="" />
                  </div>

                  <div className="cartimg-title-container">
                    <p className="cartitem-title">{item.title}</p>
                  </div>

                  <div className="cart-item-price-container">
                    <p className="cartitem-price">Rs {(Number(item.price) * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="cart-item-counter">
                    <SquareMinus className='addIcon' onClick={() => updateQuantity(item.id, "dec")} />
                    <span className='quantity'>{item.quantity}</span>
                    <SquarePlus className='minusIcon' onClick={() => updateQuantity(item.id, "inc")} />
                    <Trash2
                      className="removeIcon"
                      onClick={() => removeCartItem(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

    </>
  )
}

export default Cart