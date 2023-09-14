import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

function SignUp({handleSignup, indicator, handleLogin, loginForm, signupForm, style}) {
  return (
    // <div className="signup-container">
    //   <div action="" className='form'>
    //     <div className="signup-header">
    //       <div className="login" >Login</div>
    //       <div className="signup" onClick={handleSignup}>Sign Up</div>
    //     </div>
    //     <hr className="indicator" />
    //     <div className="form-body">
    //       <form className={loginForm} >
    //           <input type="email" className='inputt' placeholder='Enter your email'/>
    //           <input type="email" className='inputt' placeholder='Enter your password'/>
    //           <button className='inputt signup-btn'>log in</button>
    //           <Link className='forgotten'>Forgotten your password</Link>
    //       </form>
    //       <form className={signupForm} >
    //           <input type="text" className='inputt' placeholder='Username'/>
    //           <input type="email" className='inputt' placeholder='Email'/>
    //           <input type="password" className='inputt' placeholder='Password'/>
    //           <button className='inputt signup-btn'>Sign Up</button>
    //       </form>
    //     </div>

    //   </div>
    // </div>
  <div className='account'>
    <div className="container">
      <div className="form-container">
        <div className="form-btn">
          <div className='span'onClick={handleLogin}>Login</div>
          <div className='span'onClick={handleSignup}>Sign Up</div>
        </div>
          <hr className={indicator} />
        <form  className={loginForm}>
          <input type="email" placeholder='Enter your email'/>
          <input type="password" placeholder='Enter your password' />
          <button className='btn-login'type='submit'>Login</button>
          <Link className="forgotten">Forgotten Password?</Link>

        </form>
        <form action="" className={signupForm}>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button className='btn'>Sign Up</button>
        </form>
      </div>
    </div>
    
  </div>
                
  )
}

export default SignUp