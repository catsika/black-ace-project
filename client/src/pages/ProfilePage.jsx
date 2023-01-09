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
    <div>
      {console.log(info)}

<div>
  {info.username}
  
</div>
<div className="">
  {info.feed}
</div>
<div className="image">
  <img src={info.profileImage} alt="" />
</div>


      <button className="submit"  onClick={logout}>logout</button>
    </div>
  )
}
export default Profile