import React, { useEffect, useMemo, useState, } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage'

import axios from "axios"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Products from './Components/ProductsPage/Products'
import Cart from './Components/CartPage/Cart'

const App = () => {
  const [data, setData] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setmaxPrice] = useState(10000);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      setDebouncedSearch(searchVal);
    }, 200)

    return () => clearTimeout(timer);
  }, [searchVal]);

  //usememo funct
  const filteredData = useMemo(() => {
    // if (debouncedSearch === "" && category === "") {
    //   return data;
    // }

    return data.filter(item => {
      const matchedSearch = debouncedSearch ? item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) : true;


      const matchedCategory = category ? item.category === category : true;//condition lgare and variable me store krre 
      // agr category set ki hai to vhi vale products show hone
      // true mtlb sare product show honge[true tb hoga jb koi category select nhi hogi]


      const matchedPrice = item.price <= maxPrice;//jo jo item ke price range vale price se chhote ya equal honge vo show hoga 

      return matchedSearch && matchedCategory && matchedPrice;


    });
  }, [data, debouncedSearch, category, maxPrice]);





  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Homepage data={data} />} />
          <Route path='/products' element={
            <Products
              data={filteredData}
              searchVal={searchVal}
              setSearchVal={setSearchVal}
              setCategory={setCategory}
              maxPrice={maxPrice}
              setmaxPrice={setmaxPrice}
            />} />
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>


    </>

  )
}

export default App