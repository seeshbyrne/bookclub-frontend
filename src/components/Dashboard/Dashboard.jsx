import { AuthedUserContext } from '../../App';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import BookCard from '../BookCard/BookCard';
import axios from 'axios';

const Dashboard = ({ }) => {
  const user = useContext(AuthedUserContext);
  const navigate = useNavigate();

  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState('');

  const searchBook = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDegmK3IFVWlUi9SzeHLix2ggWjXzb_FWA' + '&maxResults=40')
        .then(res => setBookData(res.data.items))
        .catch(error => console.log(error))
    }
  }


  return (
    <main>
      <h1 className="py-5 pt-10">Welcome{user ? ', ' + user.username : ' to BookClub'}</h1>

      {!user && (
        <>
          <p className='text-center'>A platform to connect book lovers.</p>
          <p className='text-center'>Sign in or create an account to view the full site.</p>
        </>
      )}

      <div className='trending'>
        <h2 className="text-6xl flex items-center mb-10">
          <span>Best</span>
          <span>Sellers</span>
        </h2>
        <div className='display-book'>
        <a href="https://books.google.com/books?id=fxcjEAAAQBAJ" target="_blank" rel="noopener noreferrer">
          <img src="http://books.google.com/books/content?id=fxcjEAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api" alt="book image" />
        </a>
        </div>
        <div className='display-book'>
        <a href="https://books.google.com/books?id=sTKxDAAAQBAJ" target="_blank" rel="noopener noreferrer">
          <img src="http://books.google.com/books/content?id=sTKxDAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api" alt="book image" />
        </a>
        </div>
        <div className='display-book'>
        <a href="https://books.google.com/books?id=wmnuDwAAQBAJ" target="_blank" rel="noopener noreferrer">
          <img src="http://books.google.com/books/content?id=wmnuDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api" alt="book image" />
        </a>
        </div>
      </div>

      <div className="square-container-one">
        <div className="trapezium-one"></div>
        <div className="bottom-part-one"></div>
      </div>

      <div className='second-shelf'>

        <div className='display-book'>
        <a href="https://books.google.com/books?id=4xsDEQAAQBAJ" target="_blank" rel="noopener noreferrer">
          <img src="http://books.google.com/books/content?id=4xsDEQAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api" alt="book image" />
        </a>
        </div>

        <div className='display-book'>
        <a href="https://books.google.com/books?id=SSJxEAAAQBAJ" target="_blank" rel="noopener noreferrer">
          <img src="http://books.google.com/books/content?id=SSJxEAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api" alt="book image" />
        </a>
        </div>

        <div className='display-book'>
          <a href="https://books.google.com/books?id=fFCjDQAAQBAJ" target="_blank" rel="noopener noreferrer">
            <img src="http://books.google.com/books/content?id=fFCjDQAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api" alt="book image" />
          </a>
        </div>

        <div className='display-book'>
          <a href="https://books.google.com/books?id=c2kjzwEACAAJ" target="_blank" rel="noopener noreferrer">
            <img src="http://books.google.com/books/content?id=c2kjzwEACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api" alt="book image" />
          </a>
        </div>
        <div className='display-book'>
          <a href="https://books.google.com/books?id=uW_8EAAAQBAJ" target="_blank" rel="noopener noreferrer">
            <img src="http://books.google.com/books/content?id=uW_8EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" alt="book image" />
          </a>
        </div>
      </div>

      <div className="square-container-two">
        <div className="trapezium-two"></div>
        <div className="bottom-part-two"></div>
      </div>

      {user && (
        <>
          <h2 className="mb-5 custom-font text-center">Find your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={searchBook}
            />
            <button onClick={searchBook} className="custom-font">Search</button>
          </div>

          <div className="container flex flex-wrap justify-center">
            {<BookCard book={{ items: bookData }} />}
          </div>
        </>
      )}
    </main>
  );
};

export default Dashboard;
