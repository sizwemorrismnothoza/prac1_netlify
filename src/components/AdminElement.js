import React from 'react'
import { USER_TYPE } from './UserType'
// import {CURENT_USER} from './Login' this import is used for the old implementation
import {Navigate} from 'react-router-dom';


const AdminElement = ({children, currentUser}) => {
  
  // new implementation login user and logout user on user request
  if(currentUser === null){
      
      //if the user object does not exists, then return the user to the login page
      return <div><Navigate to={'/login'} /> </div>

  }else if(currentUser === USER_TYPE.ADMIN_USER){

      
      console.log('the current user is null  in the user element');
      //Only the admin can access this page
      return <div> <Navigate to={children} /> </div>

  }else{
    return <div><Navigate to={'/login'} /> </div>
  }
    


    // Older implementation this on is used to manually login and logout user
      // const CURRENT_USER_TYPE = CURENT_USER.UserType

      // if(CURRENT_USER_TYPE === USER_TYPE.ADMIN_USER){
      //   return (
      //       <div>{children}</div>
      //     )
      // }else{
      //   return <div><Navigate to={'/login'} /></div>
      // }
}

export default AdminElement