import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { logo } from "../../assets";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Sun, Moon} from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMode, setIsMode] = useState(true);

    useEffect(()=>{
        if(isMode){
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme")
        }else{
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme")
        }


    },[isMode]);
   
    return (
        <>
            <nav className="navbar p-2">
                <div className='logo'>
                    <img src={logo} alt="logo_image" srcset="" />
                    <h2 className=' navbar-brand fw-bold fs-4'>SHOP</h2>
                </div>
                <div className="navItem d-flex p-2">
                    <Link to="/home" className='nav-link  '> Home </Link>
                    <Link to="/products" className='nav-link '> Products </Link>
                    <Link to="/cart" className='nav-link '> Cart </Link>
                    <Link to="/wishlist" className='nav-link '> <FavoriteBorderIcon/> </Link>
                    <Link to="/login" className='nav-link '> Login </Link>

                    <button
                        onClick={() => setIsMode(!isMode)}
                        className='mode-btn'
                    >{isMode ? <Sun /> : <Moon />}</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar