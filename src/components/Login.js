import React, { useState } from 'react'
import { USER_TYPE } from './UserType'
import { CURENT_USER } from './CurrentUser';


// Used for the old implementation

// export const CURENT_USER = {
//     userName : 'Sizwe',
//     Password : 'password',
//     phoneNumber: '0649257264',
//     UserType : USER_TYPE.ADMIN_USER
// }

const Login = ({currentUser, setCurrentUser}) => {


    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const updadateUserName = (e) =>{
        setUserName(e.target.value)
    }
    
    const updatePhone = (e) =>{
        setPhone(e.target.value)
    }

    const updatePassword = (e) =>{
        setPassword(e.target.value)
    }

    const userLogin = ()=>{

        // User pbject data
        // console.log('User name: ' + userName);
        // console.log('Phone: ' + phone);
        // console.log('Password: ' + password);
        // console.log('User type: ' + userType);

        //Setting the current user
        CURENT_USER.userName = userName;
        CURENT_USER.phone = phone;
        CURENT_USER.password = password;
        CURENT_USER.userType = USER_TYPE.ADMIN_USER

        // Saving data to local storage
        localStorage.setItem('currentUser', JSON.stringify(CURENT_USER));

        //update the state of the user in app root
        setCurrentUser(CURENT_USER);
        
    }


    return (

        <section className='container'>
            <h1>Login</h1>

            {/* Name */}
            <div className='form-group row'>
                <label className='form-control' htmlFor='userName'>Your name</label>
                <input  className='form-control' 
                        id='userName' 
                        name='userName' 
                        type='text' 
                        value={userName} 
                        onChange={updadateUserName} 
                        max={50}
                    />
            </div>

            {/* Phone number */}
            <div className='form-group row'>
                <label className='form-control' htmlFor='phone'>Phone Number</label>
                <input className='form-control' 
                        id='phone' 
                        name='phone'
                        type='tel' 
                        value={phone} 
                        onChange={updatePhone} 
                        maxLength={10}
                    />
            </div>

            {/* Password */}
            <div className='form-group row'>
                <label  className='form-control' htmlFor='password'>Password</label>
                <input  className='form-control'
                        id='password'
                        name='password'
                        type='password'
                        value={password}
                        onChange={updatePassword}
                        maxLength={50}
                    />

            </div>

            <button onClick={userLogin} className='btn btn-outline-primary'>Login</button>

        </section>
    )
}


export default Login