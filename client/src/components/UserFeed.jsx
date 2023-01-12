import {useState,useEffect} from 'react'
import axios from 'axios'

const UserFeed = () => {
const [userfeed,setUserFeed] = useState([])

const user = JSON.parse(localStorage.getItem("userInfo"))


useEffect(()=>{
  axios.get(`http://localhost:5000/api/feed/user/${user._id}`)
.then((response)=>setUserFeed(response.data.user.feed))
.catch((error)=>console.log(error))
},[user._id, userfeed])

  return (
    <div>
      <h1>Posts</h1>
   {userfeed && userfeed.map((res)=>

     <><><div className="user-feed">
    
       <div className=' '>
         <div className="key" key={res.id}>

           <div className="descr">

             <br />
             {res.description}
           </div>
         </div>
         <br />
         <img src={res.image} alt="mages" className='feed-images' />
         <br />
         <br />
        

       </div>
       <br />
     </div>

     </><br /><br /></>


)}
    </div>
  )
}

export default UserFeed