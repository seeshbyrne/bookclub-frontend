import { AuthedUserContext } from '../../App';
import { useContext, useState } from 'react';
import './dashboard.css';
import BookCard from '../BookCard/BookCard';
import axios from 'axios';
import BookList from '../BookList/BookList';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);

  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState('');

  const searchBook = (event) => {
    if(event.key==="Enter")
      {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDegmK3IFVWlUi9SzeHLix2ggWjXzb_FWA ')
        .then(res=>setBookData(res.data))
        .catch(error=>console.log(error))
      }
  }

  <p>TESTING</p>


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
            <button>search</button>
        </div>

        <div className="container">

            <BookCard book={bookData} />

        </div>

    </main>
  );
};

export default Dashboard;
