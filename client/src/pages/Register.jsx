import { useNavigate } from 'react-router-dom';
import {useState} from'react'
import axios from 'axios'
import {toast} from 'react-toastify'


const Register = () => {
  const [username,setName]=useState('')
  const [password,setpassword]=useState('')
  const [email,setEmail]=useState('')
  const [profile,setPofile]=useState('')
  const [bio,setBio]=useState('')
  const [city,setCity]=useState('')
  const [age,setAge]=useState('')

  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault()
   axios.post('http://localhost:5000/api/users/register/',{
    username,
    email,
    password,
    profileImage:profile,
    Bio:bio,
    city,
    age
  })
  .then((res)=>{
    console.log(res.data)
    toast.success('registration successful')
    if(res.data){
      localStorage.setItem("userInfo",JSON.stringify(res.data))
      navigate("/");
     }
     setName('')
     setpassword('')
     setEmail('')
     setPofile('')
     setBio('')
     setCity('')
     setAge('')
  }
  
  )

  .catch((error)=>{
  toast.error(error.response.data)
  
  }
  
  )
}
  return (
    <div>
        <div className='register'>
        <div className="introd">
            <h1 className='reg-text'>AceHood</h1>
            <p className='parami'>connect with family,friends and the world around you on AceHood</p>
        </div>
     <div className="register-form">
  <div className="param">
 <form onSubmit={handleSubmit}>
 <div className="username">
  <input type="text"  placeholder='Enter Username..' className='username' 
  value={username} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <br />
 <div className="email">
    <input type="email"  placeholder='Enter Email..' className='email' 
    value={email} onChange={(e)=>setEmail(e.target.value)}  />
    </div>
    <br />
    <div className="password">
      <input type="password"  placeholder='Enter Password...' className='password'
      value={password} onChange={(e)=>setpassword(e.target.value)}
      />
    </div>
<br />
    <div className="file">
      <input type="text"   className='file' placeholder='image'
      value={profile} onChange={(e)=>setPofile(e.target.value)}
      />
    </div>
    <br />
    <div className="Bio">
      <textarea type="text"  placeholder='tell us a bit about yourself...' className='password'
      value={bio} onChange={(e)=>setBio(e.target.value)}
      />
    </div>
    <br />
    <div className="age">
    <input type="number"  placeholder='Enter age..' className='age'
    value={age} onChange={(e)=>setAge(e.target.value)}
    />
    </div>
<br />
    <select value={city} onChange={(e)=>setCity(e.target.value)} >
      <option value="">Choose City</option>
        <option value="Accra,Ghana" >Accra,Ghana</option>
        <option value="London,Uk">London,Uk</option>
        <option value="Tokyo,Japan">Tokyo,Japan</option>
        <option value="Mumbai,India">Mumbai,India</option>
        <option value="Beijing,China">Beijing,China</option>
        <option value="Jakarta, Indonesia">Jakarta, Indonesia</option>
        <option value="New York City, USA">New York City,USA</option>
        <option value="São Paulo, Brazil">São Paulo, Brazil</option>
        <option value="Mexico City, Mexico">Mexico City, Mexico</option>
        <option value="Buenos Aires,Argentina">Buenos Aires,Argentina</option>
        <option value="Moscow,Russia">Moscow,Russia</option>
        <option value="Chicago,USA">Chicago,USA</option>
    </select>
    <br />
    <br />
    <button  type='Submit' className="submit"  >
Create Account
</button>
 </form>
    

<p className='link'>already have an account ? <a   href="/">Login</a></p>
<hr />


  </div>
     </div>
    </div>
    </div>
  )
}

export default Register