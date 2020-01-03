import React from 'react'

const Notification = ( {notification}) => {
  // if (notification === ''){
  //   return null
  // } else {
    return(
      <div className="notification">
        <p>{notification}</p>
      </div>
    )
  }
// }

export default Notification