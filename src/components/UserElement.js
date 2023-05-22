import React from 'react'
import { USER_TYPE } from './UserType';
// import {CURENT_USER} from './Login'; this import is used for the old implementation
import {Navigate} from 'react-router-dom';

const UserElement = ({children, currentUser}) => {


    // new implementation login user and logout user on user request
    if(currentUser === null ){

        console.log('the current user is null  in the user element');
        //if the user object does not exists, then return the user to the login page
        return <div><Navigate to={'/login'} /></div>

    }else if(currentUser.userType === USER_TYPE.NORMAL_USER || currentUser.userType === USER_TYPE.ADMIN_USER){
        console.log('the current user has a value,  its either normal user or admin user');
        // if current user is a normal user or an admin user then they can have access to the form
        return <div>{children}</div>
    }else{
        return (
        <>
            <h1>Whats up,  im missing something</h1>

            <p>lets see the curremnt user  {currentUser.userName}</p>

        </>
    )}



    // Older implementation this on is used to manually login and logout user
    // const CURRENT_USER_TYPE = CURENT_USER.UserType;

    // if(CURRENT_USER_TYPE === USER_TYPE.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPE.ADMIN_USER){
    //     return (
    //         <div>{children}</div>
    //       )
    // }else{
    //    return <div><Navigate to={'/login'} /> </div>
    // }
}

export default UserElement