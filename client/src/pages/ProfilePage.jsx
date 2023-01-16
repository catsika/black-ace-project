import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';
import {FiEdit} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import {BsCalendarDate} from 'react-icons/bs'
import UserFeed from '../components/UserFeed';
import Followers from '../components/Followers';
import userCommunity from '../components/userCommunity';




export const Profile = () => {
  const [info,setInfo] = useState([])
  const navigate = useNavigate()

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
<div className="profile-intro">
<img src={info.profileImage} alt="" width={500} height={400} className='profile' />
 <div className="bio">
  <h3>Bio</h3>
<div className="user-info">
<div className="profile-birth">
 <BsCalendarDate/>  {info.birth}
</div>
<div className="profile-city">
 <GoLocation />{info.city}
</div> 
</div>
 {info.Bio}
 </div>
</div>
  <div className="add">
  <FiEdit/> Edit profile
  </div>

</div>

<div className="profile-username">
<h3>{info.username}</h3>  
</div>
<hr className='line'/>







</div>

<UserFeed/>
<Followers/>
<userCommunity/>
    </div>

  )
}
export default Profile
