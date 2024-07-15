// import { useState } from 'react';
// import BookCard from './BookCard';
// import axios from 'axios';

// const BookSearch = (props) => {
//     const user = useContext(AuthedUserContext);

//     const [bookData, setBookData] = useState([]);
//     const [search, setSearch] = useState('');

//     const searchBook = (event) => {
//         if(event.key==="Enter")
//         {
//             axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDegmK3IFVWlUi9SzeHLix2ggWjXzb_FWA ')
//             .then(res=>setBookData(res.data))
//             .catch(error=>console.log(error))
//         }
//     }


//     return (
//         <>
//         <h2>Find your book</h2>
//         <div className="search">
//             <input type="text" placeholder="Enter Your Book Name" 
//             value={search} onChange={event=>setSearch(event.target.value)}
//             onKeyPress={searchBook}
//             />
//             <button>search</button>
//         </div>

//         <div className="container">

//             <BookCard book={bookData} />

//         </div>
//         </>

//     )
// };

// export default BookSearch;