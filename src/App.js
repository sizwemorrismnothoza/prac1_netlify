
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Login from './components/Login';
import Admin from './components/Admin';
import UserElement from './components/UserElement';
import AdminElement from './components/AdminElement';
import { useEffect, useState } from 'react';

function App() {

  // used to manage the current user state
  const [currentUser, setCurrentUser] = useState({});

  // used to get the current user from storage
  const [storedUser, setStoredUser] = useState({})

  // page must re render when the current user state changes
  useEffect(()=>{

    setStoredUser(JSON.parse(localStorage.getItem('currentUser')));

    setCurrentUser(storedUser);

    console.log('current user in the app component');
    console.log(currentUser);

  },[currentUser, storedUser])  //The second parameter is a dependancy for the re render, either when the stored user or current user updates the useEffect will re render

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={ 

          // passing down the cuurent user to User element component
          <UserElement currentUser = {currentUser}>

            {/* Passing down the current user to the Form component  */}
            <Form currentUser={currentUser} />

          </UserElement>
        } />

        {/* Passing down the current user to the login component  and also passing down a function to update the state of the current user */}
        <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />

        <Route path='/admin' element={

          // Passing down the current user to the Admin element component
          <AdminElement currentUser={currentUser}>
              {/* Passing down the current user to the Admin component */}
              <Admin currentUser={currentUser} />
          </AdminElement>

        } />

        <Route path='/*' element={<div>Page not found</div>} />

      </Routes>
    </div>
  );
}

export default App;
