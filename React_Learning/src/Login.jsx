import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?<>";


    const [userLogin, setuserLogin] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const generateToken = () => {
        let token = "";
        for (let i = 0; i <= 20; i++) {
            const words = Math.floor(Math.random() * characters.length);
            token += characters[words];
        }
        return token;
    }

    
    const handleLogin = () => {
        if (userLogin.email === "") {
            alert("All fields are requires");
        }
        if (userLogin.password === "") {
            alert("All fields are requires");
        }


        let loggedInUser = JSON.parse(localStorage.getItem("userdata"));

        if (loggedInUser.email === userLogin.email && loggedInUser.password === userLogin.password) {
            alert("login successfull");

            const token = generateToken();
            localStorage.setItem("token", token)

            console.log(token);

            navigate("/home");
        } else {
            alert("user not found");
        }

        setuserLogin({
            email: "",
            password: ""
        })

    }

    return (
        <>
            <div className="Container login">
                <div className="Box">
                    <h3>Login Here</h3>

                    <div className="fields">

                        <label >Enter Email</label>
                        <input type="email" id="email" placeholder='example@gmail.com....'
                            value={userLogin.email} onChange={(e) => setuserLogin({ ...userLogin, email: e.target.value })}
                            required />

                        <label >Enter Password</label>
                        <input type="password" id="password" min={3} max={8}
                            value={userLogin.password} onChange={(e) => setuserLogin({ ...userLogin, password: e.target.value })}
                            required />

                    </div>
                </div>

                <button className='btn' onClick={handleLogin}>Login</button>
            </div>

        </>
    )
}

export default Login