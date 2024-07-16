import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
<<<<<<< HEAD
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
=======
        <nav>
          <ul>
            <li><Link to="/">Home</Link>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/members">Members</Link></li>
            </li>
            <li>
              <Link to="" onClick={handleSignout}>
                Sign Out
              </Link>
            </li>
          </ul>
>>>>>>> aa09a4897ec7a56b1f3a36bef9e3ef310e0989b2
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
