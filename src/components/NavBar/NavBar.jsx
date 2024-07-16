import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
        <nav>

            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/members">Members</Link>
            <Link to="" onClick={handleSignout}>Sign Out</Link>

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
