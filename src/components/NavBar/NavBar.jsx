import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
        <nav class="bg-gray-100">
          <div class=" px-4 py-2 mx-auto border">
            <div class="flex">
              <div>
                <Link to="/books"> Home </Link>
                <Link to="/reviews"> Reviews </Link>
                </div>

                <Link to="" onClick={handleSignout}> Sign Out </Link>
              </div>
          </div>
        </nav>
      ) : (
        <nav class="bg-gray-100">
          <div class="px-4 py-2 mx-auto border">

              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>

          </div>
        </nav>
      )}
    </>
  );
};
export default NavBar;
