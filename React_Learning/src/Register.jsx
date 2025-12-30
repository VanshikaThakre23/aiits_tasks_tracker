import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formdata, setFormdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleSubmit = () => {

        if (formdata.firstname === "") {
            alert("all fields are required");
            return;
        }

        if (formdata.lastname === "") {
            alert("all fields are required");
            return;
        }

        if (formdata.email === "") {
            alert("all fields are required");
            return;
        }

        if (formdata.password === "") {
            alert("all fields are required");
            return;
        }

        localStorage.setItem("userdata", JSON.stringify(formdata));

        console.log((formdata));

        navigate("/login");

        setFormdata({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        });


        let savedUser = JSON.parse(localStorage.getItem("userdata"));
        console.log("hello", savedUser);
    }


    return (
        <>
            <div className="Container register">
                <div className="Box">
                    <h3>Register Here</h3>

                    <div className="fields">
                        <label >First Name</label>
                        <input type="text" name="firstname" value={formdata.firstname} placeholder='first name..' required
                            onChange={(e) => setFormdata({
                                ...formdata,
                                firstname: e.target.value
                            })}
                        />

                        <label >Last Name</label>
                        <input type="text" value={formdata.lastname} name="lastname" placeholder='last name....' required
                            onChange={(e) => setFormdata({
                                ...formdata,
                                lastname: e.target.value
                            })}
                        />

                        <label > Email</label>
                        <input type="text" value={formdata.email} placeholder='example@gmail.com....' required
                            onChange={(e) => setFormdata({
                                ...formdata,
                                email: e.target.value
                            })}
                        />

                        <label > Password</label>
                        <input type="password" value={formdata.password} required
                            onChange={(e) => setFormdata({
                                ...formdata,
                                password: e.target.value
                            })}
                        />

                    </div>
                </div>

                {/* <button className='btn' onClick={console.log(formdata)}>Register</button> */}
                <button className='btn' onClick={handleSubmit}>Register</button>


            </div>
        </>
    )
}

export default Register