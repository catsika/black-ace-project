import {FaCommentDots,FaBell,FaUserAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

const Navbar = () => {
    const navigate = useNavigate()
    const [user,setuser] = useState("")
    useEffect(() => {
        const User = JSON.parse(localStorage.getItem("userInfo"));
        setuser(User)
        if (!User) navigate("/");
      }, [navigate]);
    
  return (
    <><div className='nav'>
          <div className="home-logo">
            <a href="/feed"> AceHood</a>

          </div>
        {user &&  <><form className="nosubmit">
              <input className="nosubmit" type="search" placeholder="Search AceHood" />
          </form><div className="icons">
                  <div className="text">
                      <FaCommentDots size={25} />
                  </div>
                  <div className="notify">
                      <FaBell size={25} />
                  </div>
                  <div className="user">
                   <a href="/profile" className="herl"><FaUserAlt size={25} /></a>
                  </div>

              </div></>
}

      </div>
      <br />
      <br />
      <br />
      </>
  )
}

export default Navbar