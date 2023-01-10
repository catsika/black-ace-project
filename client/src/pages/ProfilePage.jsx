import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';



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
      {console.log(info)}


<div className="profile-image">
  <img src={info.profileImage} alt="" />
</div>

<div className="bio">
  {info.Bio}
</div>
<div className="profile-username">
  {info.username}
</div>
<div className="profile-birth">
 {info.birth}
</div>
<div className="profile-city">
  {info.city}
</div>


      <button className="submit"  onClick={logout}>logout</button>

    </div>

  )
}
export default Profile
