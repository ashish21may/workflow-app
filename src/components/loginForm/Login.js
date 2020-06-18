import React, { useState } from 'react';

import './Login.css';

const LoginPage = ({setLoggedIn}) => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const handleSubmitClick = e => {
    e.preventDefault();
    // In Below code we might check the same credentials using an API call with axios and
    // display component as per the response. 

    if (formState.email.length && formState.password.length) {
      console.log('Login Success')
      setLoggedIn(true);
    } else {
      console.log('Login Failed')
    }
    console.log(formState);
  }

  const handleEmailUpdate = e =>
    setFormState({ email: e.target.value, password: formState.password })
  const handlePasswordChange = e =>
    setFormState({ email: formState.email, password: e.target.value })

  return (
    <form className='form' onSubmit={handleSubmitClick}>
      <h2 style={{ textAlign: 'center' }}> LOGIN </h2>
      <input
        className='input'
        type='email'
        id='email'
        placeholder="Email"
        value={formState.email}
        onChange={handleEmailUpdate}
      /> 
      <input
        className='input'
        type='password'
        id='password'
        placeholder='Password'
        value={formState.password}
        onChange={handlePasswordChange}
      />
      <div style={{marginLeft: '16px'}}>
        <input type='checkbox' id='checkbox' />
        <span style={{fontSize:'16px'}}> Remember Me </span>
      </div>
      <input type='submit' className='login-button' value='Login' />
    </form>
  )
}

export default LoginPage
