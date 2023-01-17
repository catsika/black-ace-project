import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'

const Community = () => {
  const [community,setCommunity] = useState([])

  const user = JSON.parse(localStorage.getItem("userInfo"))
   useEffect(()=>{
    setCommunity(user.community)
    
   },[])
  return (
    <div className='community-container'>
      Community Posts
      <br />
{community && community.map((res)=>
  <><div className="com-name">
    {res.name}
  </div><div className="description">
      {res.description}
    </div>
    <div className="com-posts">
      {res.posts.description}
    </div>
    <div className="com-image">
      <img src={res.posts.image} alt="" />
    </div>
    </>
)}

     <br />
     <div className="com-name">
  
     </div>
    </div>
  )
}

export default Community