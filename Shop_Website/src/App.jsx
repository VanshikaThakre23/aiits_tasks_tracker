import React, { useEffect, useMemo, useState, } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage'
import Products from './Components/ProductsPage/Products'
import Cart from './Components/CartPage/Cart'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Wishlist from './Components/Wishlist/Wishlist'
import Login from './Components/LoginPage/Login';


const App = () => {
  const [data, setData] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setmaxPrice] = useState(10000);
  const [cart, setCart] = useState(getCartItem);
  const [wishlist, setWishlist] = useState(getWishItem);


  // ------------------ Api Fetch using using axios-----------------
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
      .catch((err) => console.log(err))
  }, []);


  // --------------------item ko cart me daalne k liye with help of toast---------------------------
  const handleCart = (data) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === data.id);

      if (exist) {
        toast.info("Item already in cart");
        return prev;
      }
      toast.success("Added to cart");
      return [...prev, { ...data, quantity: 1 }]
    });
  };


  // --------------------item ko cart me wishlist krne k liye with help of toast---------------------------
  const handleWishlist = (data) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === data.id)
      if (exist) {
        toast.info("Item already in wishlisted");
        return prev;
      }
      toast.success("Added to wishlist");
      return [...prev, data];
    }
    )
  }

  // -------------------- update cart item quantity ---------------------------
  const updateQuantity = (id, type) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            type === "inc" // condition check
              ? item.quantity + 1//if type == inc hai to ye chalega but agr minus button click hui to ye condition false hogi to to niche vali line hogi check 
              : item.quantity > 1 //yaha akr 1 se bdi value hai to niche vali line chalegi 
                ? item.quantity - 1 // yaha pe minus hogi value 
                : 1 //agr value 1 hogyi to 1 hi rahegi kyuki hmne  item.quantity > 1 greater that check kiya equal to nhi 
        }

      }
      return item;
    }
    )
    setCart(updatedCart);
  }


  // ye niche ka func cart me add item ko localStorage m store krta hai .we have use anormal function coz arrow func hoist nhi hote normal vale ho jaate hai .agr arrow funct use krre to error aaega ki usatate me pehle use kr liye bina declare kiye
  function getCartItem() {
    const savedCartItem = localStorage.getItem("cart");
    return savedCartItem ? JSON.parse(savedCartItem) : [];
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // wishlist add krne k liye bhi vhi func bs name alg
  function getWishItem() {
    const savedwishItem = localStorage.getItem("wishlist");
    return savedwishItem ? JSON.parse(savedwishItem) : [];
  }
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])


  // search bar pe debouncing lgane k liye use effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchVal);
    }, 200)

    return () => clearTimeout(timer);
  }, [searchVal]);

  //------------usememo funct----------------
  const filteredData = useMemo(() => {
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
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
              handleCart={handleCart}
              handleWishlist={handleWishlist}
            />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} updateQuantity={updateQuantity} />}></Route>
          <Route path='/wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} handleCart={handleCart} />}></Route>
          <Route path='/products/:id' element={<ProductDetails data={data} handleCart={handleCart} handleWishlist={handleWishlist} />}></Route>
          <Route path='/login' element={<Login/>}></Route>


        </Routes>
      </BrowserRouter>

      <ToastContainer
        position='top-right'
        autoClose={800}
      />
    </>

  )
}

export default App