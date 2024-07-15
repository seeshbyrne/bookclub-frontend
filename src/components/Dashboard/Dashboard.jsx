import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';
import './dashboard.css';
import BookCard from '../BookCard/BookCard';
import ReviewForm from '../ReviewForm/ReviewForm';
import axios from 'axios';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);

  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState('');
  const searchBook = (event) => {
    if(event.key==="Enter" || event.type === "click") {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDegmK3IFVWlUi9SzeHLix2ggWjXzb_FWA ')
        .then(res => setBookData(res.data.items))
        .catch(error => console.log(error))
      }
  }

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you, and only you, can see a dashboard
        of all of your things.
      </p>

        <h2>Find your book</h2>
        <div className="search">
            <input type="text" placeholder="Enter Your Book Name" 
            value={search} onChange={event=>setSearch(event.target.value)}
            onKeyPress={searchBook}
            />
            <button onClick={searchBook}>Search</button>
        </div>

        <div className="container">
                {bookData.length > 0 ? <BookCard book={{ items: bookData }} /> : <p>No books found</p>}
            </div>

        <ReviewForm />

    </main>
  );
};

export default Dashboard;
