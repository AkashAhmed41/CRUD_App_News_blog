import React from 'react'
import { Navigate } from 'react-router-dom'

export default function LogoutRoute() {
    // let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    return (
        <div>
            {
                localStorage.removeItem("isLoggedIn")
            }
            {
                localStorage.removeItem("access_token")
            }
            {isLoggedIn ? <Navigate to="/login" replace /> : <h3> </h3>}
        </div>
    )
}
