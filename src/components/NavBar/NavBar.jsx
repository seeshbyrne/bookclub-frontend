import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './NavBar.css';
import { IoMdBook } from "react-icons/io";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsPeople } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
        <nav className="py-3 w-full">
          <div>
            <div className="nav-links flex justify-between mt-2 custom-font">
              <div className="flex flex-wrap" >
              <Link to="/" 
                className="mr-5 
                flex 
                items-center 
                text-black 
                bg-orange-50
                px-4 py-1 rounded-xl">
                <IoMdBook style={{ marginRight: '8px' }} />Home
              </Link>
              <Link to="/reviews" 
                className="mr-5 
                flex 
                items-center
                text-black 
                bg-orange-50
                px-4 py-1 rounded-xl">
                <TfiCommentAlt style={{ marginRight: '8px' }} />Reviews
              </Link>
              <Link to="/members" 
                className="mr-5 
                flex 
                items-center
                text-black 
                bg-orange-50
                px-4 py-1 rounded-xl">
                <BsPeople style={{ marginRight: '8px' }} />Members
              </Link>
              </div>
              <Link to="" onClick={handleSignout} 
                className="text-black 
                flex 
                items-center
                bg-orange-50
                px-4 py-1 rounded-xl">
                <PiSignOut style={{ marginRight: '8px' }} />Sign Out
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav>
          <div>

              <Link to="/signin" className="text-black">Sign In</Link>
              <Link to="/signup" className="text-black">Sign Up</Link>

          </div>
        </nav>
      )}
    </>
  );
};
export default NavBar;
