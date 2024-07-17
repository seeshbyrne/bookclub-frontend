import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import './BookDetails.css'
import ReviewForm from '../ReviewForm/ReviewForm';
import * as reviewService from '../../services/reviewService';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const params = useParams();

  const initialState = {
    bookId: book.id,
    bookTitle: book.volumeInfo.title,
    bookAuthor: book.volumeInfo.authors.join(', '),
    text: '',
    rating: 0
  };

  if (!book) {
    return <div>No book details available</div>;
  }

  const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

  const _handleAddReview = async (reviewFormData) => {
    await reviewService.create(reviewFormData);
    navigate('/reviews')
  }

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
        <ReviewForm
          setIsModalOpen={setIsModalOpen}
          handleAddReview={_handleAddReview}
          initialState={initialState} 
        />
      </div>
    </div>
  );
};


export default BookDetails;