import React, { useState, } from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu , X } from 'lucide-react';

import "./Products.css";

const Products = ({ data, searchVal, setSearchVal, setCategory, maxPrice, setmaxPrice , handleCart , handleWishlist }) => {

    const navigate = useNavigate();

    const [sidebarbutton, setSidebarbutton] = useState(true);

    // const handleCart = (products) => {
    //     setCart(prevCart => [...prevCart, products]);
    //     // alert("item added to cart");
    //     toast("Added to cart ");
    // }

    // const handleWishlist = (products) => {
    //     setWishlist(prev => [...prev, products]);
    //     // alert("item added to wishlist");
    //     toast("item added to wishlist")
    // }

    return (
        <>
            <div className={`layout ${sidebarbutton ? "sidebar-open" : "sidebar-closed"}`}>
                <div className="sidebar">
                    <button className='sidebar_openclosebtn'
                        onClick={() => setSidebarbutton(prev => !prev)}>{sidebarbutton ? <X /> : <Menu />}</button>
                    {
                        sidebarbutton && (
                            <div className='sidebar-content '>
                                <div className="search-bar p-2 my-2">
                                    <input
                                        type="text"
                                        className="p-2 rounded"
                                        value={searchVal}
                                        onChange={(e) => setSearchVal(e.target.value)}
                                        placeholder="Search for clothes..."
                                    />
                                </div>
                                <div className="category ">
                                    <h5>Select Category</h5>
                                    <button onClick={() => setCategory("")}>All</button>
                                    <button onClick={() => setCategory("men's clothing")}>Men</button>
                                    <button onClick={() => setCategory("women's clothing")}>Women</button>
                                    <button onClick={() => setCategory("electronics")}>Electronics</button>
                                    <button onClick={() => setCategory("jewelery")}>Jewellary</button>
                                </div>


                                <div className="price-content mt-4 ">
                                    <h5>Price</h5>

                                    <p className="price-value px-2">
                                        Rs 0 - Rs {maxPrice}
                                    </p>

                                    <input type="range" min={0} max={1000} step={100} value={maxPrice} onChange={(e) => setmaxPrice(Number(e.target.value))} />
                                </div>
                            </div>

                        )
                    }

                </div>


                <div className="card-container">
                    {
                        data.map(item => (
                            <div className="product-card-body" key={item.id}>
                                <FavoriteBorderIcon onClick={() => handleWishlist(item)} className='heartIcon' />
                                <div className="product-card-top">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="product-card-mid">
                                    <h1 className='product-card-title' title={item.title}>{item.title}</h1>
                                    <h4 className='product-card-price'>Rs. {item.price}</h4>
                                </div>
                                <div className="product-card-bottom">
                                    <button className='product-view-btn' onClick={() => navigate(`/products/${item.id}`)}>View</button>
                                    <span title="Add to Cart" > <ShoppingCart onClick={() => handleCart(item)} className='product-card-cartIcon' /></span>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

           
        </>
    )
}

export default Products