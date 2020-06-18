import React from 'react';
import './loginForm/Login.css';

const LogoutButton = ({setLoggedIn}) => {
  return(
    <button className="logout-button" onClick={()=> setLoggedIn(false)}> Log Out </button>
  );
}

export default LogoutButton;