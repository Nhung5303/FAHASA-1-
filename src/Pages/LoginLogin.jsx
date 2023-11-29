import React from 'react'
import './CSS/LoginLogin.css'
import { Link } from 'react-router-dom'
const LoginLogin = () => {
  return (
    <div className='loginlogin'>
     <div className="loginlogin-container">
      <h1>Login</h1>
      <div className="loginlogin-fields">
        <input type="text" placeholder='Email Address'/>
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
      <p className="loginlogin-login">Do you not account?
       <Link to="/login">Sign Up</Link>
       </p>
      </div>
     </div>
  )
}

export default LoginLogin