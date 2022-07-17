import React from 'react'
import CreatePost from '../component/createPost';
import ProfilefeedRoute from '../component/profilefeedRoute';
import NavbarAfterLogin from '../layout/navbarAfterLogin';
import userPhoto from "../asset/user.png"

const Profile = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <div className='profile-div'>

        <div className='sidemenuLeft'>

          <div>
            <img src={userPhoto} width="100px" height="100px" alt='user' />
          </div>
          <h3>Name: </h3>
          <h3>Email: </h3>
          <h3>Total Story: </h3>
          <button className='editProfileButton'>Edit Profile</button>

        </div>

        <div className='content clearfix'>

          <div>
            <CreatePost />
          </div>

          <div style={{ textAlign: "center", backgroundColor: "#037bfc", margin: "0 43% 0 43%" }}>
            <h3 style={{ color: "white", textAlign: "center", padding: "4px 8px" }}>Your Posts</h3>
          </div>

          <div>
            <ProfilefeedRoute />
          </div>
        </div>

        <div className='sidemenuRight'>
          <h3>Event</h3>
          <h3>Date</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile;