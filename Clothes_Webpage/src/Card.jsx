import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ShoppingCart } from 'lucide-react';

import "./Card.css"

const Card = ({ data }) => {

    

    return (
        <>
            <div className="container pt-2">
                <div className="row g-2">
                    {data.map(user => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={user.id}>
                            <div className="card product-card">
                                <div className="top">
                                    <img
                                        src={user.image}
                                        className="product-image"
                                        alt={user.title}
                                    />
                                </div>
                                <div className="card-body">
                                      <h5 className='title'>{user.title}</h5>
                                    <p className='category'>{user.category}</p>
                                    <p className='price'><strong>Rs {user.price}</strong></p>
                                </div>

                                <div className="bottom">
                                    <button className="btn btn-success view-btn">
                                        View 
                                    </button>

                                    <div className="icons">
                                        <FavoriteBorderIcon className='heart'/>
                                        <ShoppingCart className='cart' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Card
