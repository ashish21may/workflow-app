import React, { useState } from 'react'
import { FaNetworkWired } from 'react-icons/fa'
import LogoutButton from '../src/components/LogoutButton'
import LoginPage from './components/loginForm/Login'

import './App.css'
import WorkFlow from './components/workflow/Workflow'

function App () {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className='App'>
      <div className='App-header'>
        <FaNetworkWired style={{ padding: '4px 4px 0px 0px' }} />
        <span> Flow App </span>
        {loggedIn ? <LogoutButton setLoggedIn={setLoggedIn} /> : null}
      </div>
      <div className='App-body'>
        {loggedIn ? <WorkFlow /> : <LoginPage setLoggedIn={setLoggedIn} />}
      </div>
    </div>
  )
}

export default App
