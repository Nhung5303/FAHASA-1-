import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
     <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginlogin-fields">
        <input type="text" placeholder='Your Name'/>
        <input type="text" placeholder='Email Address'/>
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an count? 
      {/* <a href='./LoginLogin.jsx'>Login</a> */}
      <Link to='/LoginLogin'>Login</Link>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, i agree to the term of use & provacy policy.</p>
      </div>
     </div>
    </div>
  )
}

export default LoginSignup