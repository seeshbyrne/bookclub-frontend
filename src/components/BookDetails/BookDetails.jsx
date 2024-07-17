import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './BookDetails.css'

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <div>No book details available</div>;
  }

  const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="details">
      {/* <button className="close" onClick={() => window.history.back()}>back<i className="fas fa-times"></i></button> */}
      <img src={thumbnail} alt="book image" className="book-detail-img mt-2"/>
      <div className="book-info">
        <h1 className="text-center mb-7">{book.volumeInfo.title}</h1>
        <h3 className="text-center">{book.volumeInfo.authors.join(', ')}</h3>
        <h4 className="text-center">{book.volumeInfo.publisher}<span>{book.volumeInfo.publishedDate}</span></h4><br />
        <h4 className="description text-justify">{book.volumeInfo.description}</h4>
        <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="more-button">
          <button className="more-button">More</button>
        </a>
        <Link to="/reviews" state={{ book }} className="review-button">
          <button className="review-button">Create a Review</button>
        </Link>
      </div>
    </div>
  );
};


export default BookDetails;