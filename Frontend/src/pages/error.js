import React from 'react'
import Navbar from '../layout/navbar'
import NavbarAfterLogin from '../layout/navbarAfterLogin'
 function Error() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div>
        {isLoggedIn? <NavbarAfterLogin /> : <Navbar />}
        <h3>Error! Page not found</h3>
    </div>
  )
}
export default Error;
