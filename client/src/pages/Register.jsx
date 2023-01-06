import {FaGoogle,FaLinkedin,FaFacebook} from "react-icons/fa"

const Register = () => {
  return (
    <div>
            <div className='register'>
        <div className="introd">
            <h1 className='reg-text'>AceHood</h1>
            <p className='parami'>connect with family,friends and the world around you on AceHood</p>
        </div>
     <div className="register-form">
  <div className="param">
 <form >
 <div className="username">
      <input type="text" name="" id="" placeholder='Enter Username..' className='username'/>
    </div>
    <br />
 <div className="email">
    <input type="email" name="" id="" placeholder='Enter Email..' className='email' />
    </div>
    <br />
    <div className="password">
      <input type="password" name="" id="" placeholder='Enter Password...' className='password'/>
    </div>
<br />
    <div className="file">
      <input type="file" name="" id=""  className='password'/>
    </div>
    <br />
    <div className="Bio">
      <textarea type="text" name="" id="" placeholder='tell us a bit about yourself...' className='password'/>
    </div>
    <br />
    <div className="age">
    <input type="number" name="" id="" placeholder='Enter age..' className='age' />
    </div>
<br />
    <select name="" id="" placeholder='choose city'>
        <option value="" selected>Accra,Ghana</option>
        <option value="">London,Uk</option>
        <option value="">Bronx,New York</option>
        <option value="">Mumbai,India</option>
        <option value="">Beijing,China</option>
    </select>
 </form>
    <br />
<div className="submit">
Create Account
</div>
<p className='link'>already have an account ? <a   href="/">Login</a></p>
<hr />
<div className="social">
<FaFacebook size={35}/>
<FaGoogle  size={35}/>
<FaLinkedin size={35}/>
</div>

  </div>
     </div>
    </div>
    </div>
  )
}

export default Register