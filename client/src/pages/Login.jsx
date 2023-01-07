import React from 'react'

const Login = () => {
  return (
    <div className='Login'>
        <div className="intro">
            <h1 className='head-text'>AceHood</h1>
            <p className='para'>connect with family,friends and meet new people the world around you on AceHood</p>
        </div>
     <div className="login-form">
  <div className="param">
 <form >
 <div className="email">
    <input type="email" name="" id="" placeholder='Enter Email..' className='email' />
    </div>
    <br />
    <div className="password">
      <input type="password" name="" id="" placeholder='Enter Password...' className='password'/>
    </div>
 </form>
    <br />
<div className="submit">
    Log In
</div>
<div className="forgot">
<a  href="/">forgot password ?</a>
</div>
<hr />
<div className="create">
<a className='form-link' href="/register">Create Account </a>
</div>
  </div>
     </div>
    </div>
  )
}

export default Login