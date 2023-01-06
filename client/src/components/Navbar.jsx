import {FaCommentDots,FaBell,FaUserAlt} from "react-icons/fa"

const Navbar = () => {
  return (
    <><div className='nav'>
          <div className="home-logo">
              AceHood

          </div>
          <form className="nosubmit">
              <input className="nosubmit" type="search" placeholder="Search AceHood" />
          </form>
          <div className="icons">
              <div className="text">
                  <FaCommentDots size={25} />
              </div>
              <div className="notify">
                  <FaBell size={25} />
              </div>
              <div className="user">
               <FaUserAlt size={25}/>
              </div>
          </div>

      </div>
      <br />
      <hr className="hr"/></>
  )
}

export default Navbar