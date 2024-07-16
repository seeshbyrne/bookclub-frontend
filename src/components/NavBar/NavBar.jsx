import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './NavBar.css';
import { IoMdBook } from "react-icons/io";

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
        <nav class="py-3 w-full">
          <div>
            <div className="nav-links" class="flex justify-between mt-2">
              <div class="flex flex-wrap" >
              <Link to="/" 
                class="mr-5 flex items-center 
                text-black 
                bg-orange-50
                px-4 py-1 rounded-xl">
                <IoMdBook style={{ marginRight: '8px' }} />Home
              </Link>
              <Link to="/reviews" 
                class="mr-5 
                text-black 
                bg-orange-50
                px-4 py-1 rounded-xl">
                Reviews
              </Link>
              <Link to="/members" 
                class="mr-5 
                text-black 
                bg-orange-50
                px-4 py-1 rounded-xl">
                Members
              </Link>
              </div>
              <Link to="" onClick={handleSignout} 
                class="text-black
                bg-orange-50
                px-4 py-1 rounded-xl">
                Sign Out
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav>
          <div>

              <Link to="/signin" class="text-black">Sign In</Link>
              <Link to="/signup" class="text-black">Sign Up</Link>

          </div>
        </nav>
      )}
    </>
  );
};
export default NavBar;
