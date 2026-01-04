import React, { useState } from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingCart, Menu, X } from 'lucide-react';
import "./Products.css";

const Products = ({ data, searchVal, setSearchVal, setCategory, maxPrice, setmaxPrice }) => {
    const [sidebarbutton, setSidebarbutton] = useState(true);

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
                <div className="main-container">
                    <div className="container">
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
                                                <FavoriteBorderIcon className='heart' />
                                                <ShoppingCart className='cart' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products