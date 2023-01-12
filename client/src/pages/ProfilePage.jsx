import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';
import {FiEdit} from 'react-icons/fi'
import UserFeed from '../components/UserFeed';
import AboutUser from '../components/AboutUser';
import Followers from '../components/Followers';
import Community from '../components/Community';




export const Profile = () => {
  const [info,setInfo] = useState([])
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.removeItem("userInfo");
    navigate('/')
 }
 useEffect(() => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  setInfo(user)
  if (!user) navigate("/");
}, [navigate])

  return (
    <div className="profile-container">
      

<br />
<br />
<div className="likee">
<div className="profile-image">
  <img src={info.profileImage} alt="" width={900} height={400} className='profile' />
  <div className="add">
  <FiEdit/> Edit profile
  </div>

</div>

<div className="profile-username">
<h3>{info.username}</h3>  
</div>
<hr className='line'/>
{/* <div className="profile-birth">
 {info.birth}
</div>
<div className="profile-city">
 <GoLocation/> {info.city}
</div> */}






</div>
{/* render these components conditionally upon click */}
<UserFeed/>
<AboutUser/>
<Followers/>
<Community/>
<button className="submit"  onClick={logout}>logout</button>
    </div>

  )
}
export default Profile
