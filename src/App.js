import logo from './logo.svg';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';


function App() {

  const [user, setUser] = useState({});

  function handCallbackResponse(response) {
    const userInfo = jwt_decode(response.credential);
    console.log(userInfo);
    setUser(userInfo);
    document.getElementById('signInDiv').hidden = true;
  };

  function handeSignOut(e) {
    e.preventDefault();
    document.getElementById('signInDiv').hidden = false;
    setUser({});
  };

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: '320694194430-ma72t42if4cuikng0cicu0fpf8bptmhq.apps.googleusercontent.com',
      callback: handCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: "outline", size: "large" }
    );

    const responseMessage = (response) => {
      console.log(response);
    };

    const errorMessage = (error) => {
      console.log(error);
    };

  }, []);

  return (
    <div className="App">
      <div>
        <h2>Login By GoogleOAuth</h2>
        <br />
        {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />  */}
        <br />
      </div>
      <h2>React Google Login</h2>
      <div id="signInDiv"></div>
      {
        Object.keys(user).length != 0 &&
        <button onClick={(e) => handeSignOut(e)}>Sign out</button>
      }
      {
        user &&
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={<Protected><Account /></Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>

  );
}

export default App;
