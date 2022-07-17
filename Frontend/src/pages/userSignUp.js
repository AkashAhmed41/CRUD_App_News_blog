import React, { useState } from 'react'
import Navbar from '../layout/navbar'
import { Link } from 'react-router-dom';
import axios from "axios"

function UserSignUp() {

    const [inputs, setInputs] = useState({});
    let [message, setMessage] = useState("");
    let [isSignupSuccess, setIsSignupSuccess] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/userRegistration", inputs)
            .then(res => res.data)
            .then(data => {
                console.log(data);
                setMessage(data.success);
                setIsSignupSuccess(true);
            })
            .catch(error => {
                if (error.response.status === 409) {
                    setMessage(error.response.data.message);
                }
                else if (error.response.status === 400) {
                    setMessage(error.response.data.message);
                }
            });

    }

    return (
        <div>
            <Navbar />
            {
                isSignupSuccess ? (<div>
                    {message ? <h3>{message}</h3> : <h3>{message}</h3>}
                    <Link to='/login'><button>Log in</button></Link>
                </div>) : (
                    <div className='formDiv'>
                        <h3 className='loginStyle'>Registration Form</h3>

                        <form onSubmit={handleSubmit}>

                            <div className='loginStyle'>
                                <label htmlFor="name">Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={inputs.name || ""}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Only letters"
                                    required pattern="[a-z A-Z]+"
                                />
                            </div> <br />

                            <div className='loginStyle'>
                                <label htmlFor="email">Email: </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Enter your email"
                                />
                            </div> <br />


                            <div className='loginStyle'>
                                <label htmlFor="username">Username: </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={inputs.username || ""}
                                    onChange={handleChange}
                                    autoComplete="nope"
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
                                    autoComplete="nope"
                                    required placeholder="Enter your password" />
                            </div>

                            <div className='loginStyle'>
                                {message ? <h3>{message}</h3> : <h3>{message}</h3>}
                                <button className='editPostButton'>Sign up</button>
                            </div> <br />
                        </form>

                        <div className='loginStyle'>
                            <h3>Already have an Account?</h3>
                            <Link to="/login" ><button className='editPostButton'>Log in</button></Link>

                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default UserSignUp;