import React from 'react'
import './CSS/LoginSignup.css'
const LoginLogin = () => {
  return (
    <div className='loginsignup'>
     <div className="loginsignup-container">
      <h1>Login</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Email Address'/>
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Do you not account? <span>Sign Up</span></p>
      </div>
     </div>
  )
}

export default LoginLogin