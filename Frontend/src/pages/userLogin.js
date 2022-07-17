import React, { useState } from 'react'
import Navbar from '../layout/navbar';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';

const UserLogin = () => {
    const [inputs, setInputs] = useState({});
    let [message, setMessage] = useState("");
    let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/userLogin", {
            username: inputs.username,
            password: inputs.password
        })
            .then(res => {
                return res.data;
            })
            .then(data => {
                localStorage.setItem("access_token", data.access_token);
                setMessage(data.message);
                localStorage.setItem("isLoggedIn", "true");
                setIsLoggedIn(localStorage.getItem("isLoggedIn"));
            })
            .catch(error => {
                if (error.response.status === 401) {
                    setMessage(error.response.data.message);
                }
            })
    }
    return (
        <div>
            <Navbar />

            <div className='formDiv'>
                <h3 className='loginStyle'>Login Form</h3>

                <form onSubmit={handleSubmit}>
                    <div className='loginStyle'>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Only letters and numbers"
                            required pattern="[a-z A-Z 0-9]+" />
                    </div> <br />

                    <div className='loginStyle'>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                            autoComplete="off"
                            required placeholder="Enter your password" />
                    </div>

                    <div className='loginStyle'>

                        <div>
                            {message? <h3>{message}</h3> : <h3>{message}</h3>}
                            {isLoggedIn ? <Navigate to="/news_feed" replace /> : <h3> </h3>}
                        </div>

                        <button className='editPostButton'>Log in</button>

                    </div> <br />
                </form>

                <div className='loginStyle'>
                    <h3>Create New Account</h3>
                    <Link to="/signup" ><button className='editPostButton'>Sign up</button></Link>  

                </div>

            </div>
        </div>
    )
}

export default UserLogin;
