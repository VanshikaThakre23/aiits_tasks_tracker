import React from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import "./Products.css"


const Products = ({ data, searchVal, setSearchVal ,category , setCategory }) => {


    return (
        <>
            <div className='productContainer'>
                <div className="sidebar">
                    <Sidebar searchVal={searchVal} setSearchVal={setSearchVal} data={data} category={category} setCategory={setCategory} />
                </div>
                <div className="card">
                    <Card data={data} />
                </div>
            </div>
        </>
    )
}

export default Products