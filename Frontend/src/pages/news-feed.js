import React from 'react'
import NewsfeedRoute from '../component/newsfeedRoute';
import NavbarAfterLogin from '../layout/navbarAfterLogin';

 function NewsFeed() {
  return (
    <div>
      
        <div>
        <NavbarAfterLogin />
        <NewsfeedRoute />
        </div>
    </div>
  )
}
export default NewsFeed;