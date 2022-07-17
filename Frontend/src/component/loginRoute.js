import axios from 'axios';
import { useState } from "react";
import { Navigate } from 'react-router-dom';

function LoginRoute(props) {
    console.log("hit");
    const inputs = props.data

    let [message, setMessage] = useState("login Error");

    let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

    axios.post("http://localhost:4000/userLogin", {
        username: inputs.username,
        password: inputs.password
    })
        .then(res => {
            return res.data;
        })
        .then(data => {
            localStorage.setItem("access_token", data.access_token);
            setMessage(data.message);
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true");
        })
    return (
        <div>
            <h3>Login Message: {message}</h3>
            {isLoggedIn ? <Navigate to="/news_feed" replace/> : <h3> </h3>}
        </div>
    )
}

export default LoginRoute;