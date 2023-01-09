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
  },[feed])


  return (
<div>
<br />
<br />
<div className="others">
  <input type="text" placeholder='whats on your mind ?' className='post-field'/>
  <hr className='hr' />

<ul>
  <li><CgFeed/> Feed</li>
  <li><RiCommunityLine/> Community</li>
  <li><FaVideo/>  Live</li>
</ul>
</div>
        
  <br /> 
{feed && feed.map((res)=>

  <><div className="feed">
    <br />
    <br />
    <div className=' '>
      <div className="key" key={res.id}>
        
   <div className="intros">
  
        <br />
        <br />
      </div>

      <div className="descr">
  
        <br />
        {res.description}
      </div>
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