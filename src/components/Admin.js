import React from 'react'

const Admin = ({currentUser}) => {
  return (
    <div>{currentUser.userName}</div>
  )
}

export default Admin