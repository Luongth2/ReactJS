import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

/*
import { GoogleOAuthProvider } from '@react-oauth/google';
root.render( 
  <GoogleOAuthProvider clientId="320694194430-ma72t42if4cuikng0cicu0fpf8bptmhq.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>
)
*/
/*
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();