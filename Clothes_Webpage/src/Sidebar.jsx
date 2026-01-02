import React, { useState } from 'react'
import "./Sidebar.css";


const Sidebar = ({ searchVal, setSearchVal  ,setCategory  }) => { 

    return (
        <>
            <div className="sidebar-container">
                <nav className="navbar navbar-light bg-light ">
                    {/* <span className="navbar-brand fw-bold fs-2">CLOTHES</span> */}

                    <input
                        type="text"
                        className="p-2 rounded"
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                        placeholder="Search for clothes..."
                    />
                </nav>

                <div className="price-range">
                    <h4>Price Range</h4>
                    <input type="range" name="" id="" />
                </div>

                <div className="category">
                    <h4>Category</h4>
                    <div className="category-btn">
                        <button onClick={()=>setCategory("men's clothing")}>Men</button>
                        <button onClick={()=>{setCategory("women's clothing")}}>Women</button>
                        <button onClick={()=>{setCategory("mens clothing")}}>Jewelery</button>
                           <button onClick={()=>{setCategory("electronics")}}>electronics</button>
                    </div>

                </div>

            </div>




        </>
    )
}

export default Sidebar