import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <div>No book details available</div>;
  }

  const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="details">
        <button className="close" onClick={() => window.history.back()}>back<i className="fas fa-times"></i></button>
          <img src={thumbnail} alt="book image" />
          <div className="book-info">
            <h1>{book.volumeInfo.title}</h1>
            <h3>{book.volumeInfo.authors.join(', ')}</h3>
            <h4>{book.volumeInfo.publisher}<span>{book.volumeInfo.publishedDate}</span></h4><br />
            <h4 className="description">{book.volumeInfo.description}</h4>
            <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
              <button>More</button>
            </a>
            <Link to="/reviews" state={{ book }}>
               <button>Create a Review</button> 
            </Link>
      </div>
    </div>
  );
};


export default BookDetails;