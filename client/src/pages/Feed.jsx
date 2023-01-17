import {useState,useEffect} from 'react'
import axios from 'axios'
import {FiThumbsUp} from 'react-icons/fi'
import {TfiComments} from 'react-icons/tfi'
import {FaShare} from 'react-icons/fa'
import {CgFeed} from 'react-icons/cg'
import {RiCommunityLine} from 'react-icons/ri'
import {FaVideo} from 'react-icons/fa'

const Feed = () => {
  const [feed,setFeed] = useState([])


  useEffect(()=>{
axios.get('http://localhost:5000/api/feed')
.then((res)=>setFeed(res.data))
.then((err)=>console.log(err))
  },[])


  return (
<div>
<br />
<br />
<div className="others">
  <input type="text" placeholder='whats on your mind ?' className='post-field'/>
  <hr className='hr' />

<ul className='feed-links'>
  <li className='feed-link'><a className='sub-link' href="/createpost"><CgFeed/> Feed</a></li>
  <li className='feed-link'><RiCommunityLine/> <a className='sub-link' href="/community">Community</a></li>
  <li className='feed-link'><FaVideo/>  Live</li>
</ul>
</div>
        
  <br /> 
{feed && feed.map((res)=>

  <><div key={res._id} className="feed">
    <br />
    <br />
    <div className=' '> 
   <div className="intros">
  
        <br />
        <br />
      </div>

      <div className="descr">
  
        <br />
        {res.description}
      </div>
   
<br/>
      <img src={res.image} alt="mages" className='feed-images' />
      <br />
      <br />
      <hr />
      <div className="reactions">
        <div className="like">
        <FiThumbsUp size={20}  />   Like
        </div>
        <div className="comment">
          <TfiComments size={20}/> comment
        </div>
        <div className="share">
          <FaShare/> Share
        </div>
      </div>
      <br />
    </div>

  </div><br /><br /></>


)}

</div>
  
  

  )
}

export default Feed