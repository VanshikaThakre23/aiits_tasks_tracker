import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


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
      <div className="navbar">
        <h1 className='logo'>Logo</h1>
        <div className="navItem">

          <Link to="/home"> Home </Link>


          {!token ? (
            <Link to="/login"> Login </Link>
          ) : (
            <Link onClick={handleLogout} className='logout'>Logout</Link>
          )
          }

          <Link to="/register"> Register </Link>


        </div>
      </div>
    </>

  )
}

export default Navbar