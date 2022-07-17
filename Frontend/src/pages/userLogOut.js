import React from 'react'
import LogoutRoute from '../component/logoutRoute';
import NavbarAfterLogin from '../layout/navbarAfterLogin';

function UserLogOut() {
  return (
    <div>
      <NavbarAfterLogin />
      <LogoutRoute />
    </div>
  )
}

export default UserLogOut;