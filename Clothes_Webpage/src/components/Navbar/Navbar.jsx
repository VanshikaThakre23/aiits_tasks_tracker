import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css";


const Navbar = () => {

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successfull");
    navigate("/login");
    
  }

  return (
    <>
      <nav className="navbar p-2">
        <h2 className='logo fs-2 navbar-brand fw-bold p-3 '>SHOP</h2>
        <div className="navItem d-flex p-3">

          <Link to="/home" className='m-2 nav-link '> Home </Link>


          {!token ? (
            <Link to="/login" className='m-2 nav-link'> Login </Link>
          ) : (
            <Link onClick={handleLogout} className='logout nav-link m-2'>Logout</Link>
          )
          }

          <Link to="/register"className='nav-link m-2' > Register </Link>
          <Link to="/products" className='nav-link m-2'> Products </Link>
          <Link to="/cart" className='nav-link m-2'> Cart </Link>





        </div>
      </nav>
    </>

  )
}

export default Navbar