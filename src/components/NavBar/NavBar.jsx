import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
        <nav class="bg-gray-100 w-full">
          <div class="px-4 py-2 border">
            <div className="nav-links" class="flex justify-between">
              <div>
              {/* <Link to="/" class="mr-5">Home</Link> */}
              <Link to="/books" class="mr-5">Home</Link>
              <Link to="/reviews" class="mr-5">Reviews</Link>
              <Link to="/members" class="mr-5">Members</Link>
              </div>
              <Link to="" onClick={handleSignout}>Sign Out</Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav class="bg-gray-100">
          <div class="px-4 py-2 border">

              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>

          </div>
        </nav>
      )}
    </>
  );
};
export default NavBar;
