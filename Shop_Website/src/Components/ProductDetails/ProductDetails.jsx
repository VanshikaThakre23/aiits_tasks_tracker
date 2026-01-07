import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "./ProductDetails.css"

const ProductDetails = ({ data , handleCart }) => {

  const navigate = useNavigate();

  const { id } = useParams();

  const items = data.find((item => item.id === Number(id)))

  if (!items) return <h2>Product not found</h2>

  return (
    <>
      <div className="details-container">
        <button className='goback-btn' onClick={()=>navigate("/products")}>Go Back</button>

        <div className="item-details-body">

          <div className="details-img">
            <img src={items.image} alt="" />
          </div>

          <div className="details-info">
            <h2>{items.title}</h2>
            <h3>{items.category}</h3>
            <h4>Rs.{items.price}</h4>
            <button onClick={()=>handleCart(items)} >Add to cart</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetails