import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import BookCard from '../BookCard/BookCard';
import ReviewForm from '../ReviewForm/ReviewForm';
import axios from 'axios';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  const navigate = useNavigate();

  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState('');

  const searchBook = (event) => {
    if(event.key==="Enter" || event.type === "click") {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDegmK3IFVWlUi9SzeHLix2ggWjXzb_FWA'+'&maxResults=40')
        .then(res => setBookData(res.data.items))
        .catch(error => console.log(error))
      }
  }

  const handleBookClick = (book) => {
    navigate(`/books/${book.id}`, { state: { book }});
  };

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you, and only you, can see a dashboard
        of all of your things.
      </p>


      <div className='trending'>
          <h2>New & Trending</h2>
      </div>

      <div class="square-container-test">
        <div class="trapezium"></div>
        <div class="bottom-part"></div>
      </div>

      <div className='best-sellers'>
          <h2>Best Sellers</h2>
      </div>

      <div class="square-container-test">
        <div class="trapezium"></div>
        <div class="bottom-part"></div>
      </div>




        <h2>Find your book</h2>
        <div className="search">
            <input type="text" placeholder="Enter Your Book Name" 
            value={search} onChange={event=>setSearch(event.target.value)}
            onKeyPress={searchBook}
            />
            <button onClick={searchBook}>Search</button>
        </div>

        <div className="container">
                {<BookCard book={{ items: bookData }} />}
            </div>

        <ReviewForm />

    </main>
  );
};

export default Dashboard;
