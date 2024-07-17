import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from '../ReviewForm/ReviewForm';
import CommentForm from '../CommentForm/CommentForm';
import * as reviewService from '../../services/reviewService';
import './ReviewPage.css';
import { AuthedUserContext } from '../../App';
import { FaStar } from 'react-icons/fa';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReviewId, setSelectedReviewId] = useState(null);

    const user = useContext(AuthedUserContext);
    const { id } = useParams();
    const userId = id || user._id;

    const navigate = useNavigate();

    const _handleAddReview = async (reviewFormData) => {
        const newReview = await reviewService.create(reviewFormData);
        setReviews([...reviews, newReview]);
        navigate('/reviews');
    };

    const _handleUpdateReview = async (reviewFormData) => {
        const updatedReview = await reviewService.update(reviewFormData._id, reviewFormData);
        const updatedReviewIndex = reviews.findIndex((review) => review._id === reviewFormData._id);

        const updatedReviews = [...reviews];
        updatedReviews[updatedReviewIndex] = updatedReview;
        setReviews(updatedReviews);
        navigate('/reviews');
    };

    const _handleDeleteReview = async (reviewId) => {
        await reviewService.deleteReview(reviewId);
        const remainingReviews = reviews.filter((review) => review._id !== reviewId);
        setReviews(remainingReviews);
    };

    const _handleEditClick = async (reviewId) => {
        setIsModalOpen(true);
        setSelectedReviewId(reviewId);
    };

    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const reviewsData = await reviewService.getUserReviews(userId);
            setReviews(reviewsData);
          } catch (err) {
            setError('Failed to fetch reviews');
            console.error(err);
          }
        };
      
        fetchReviews();
      }, [userId]);

    const handleAddComment = async (commentFormData, reviewId) => {
        try {
          const newComment = await reviewService.createComment(reviewId, commentFormData);
          const updatedReviews = reviews.map((review) =>
            review._id === reviewId ? { ...review, comments: [...review.comments, newComment] } : review
          );
          setReviews(updatedReviews);
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      };

    const reviewListItems = reviews.map((review) => (
        <li key={review._id} className='reviewListItem'>
            <div className="reviewHeader">
                <div className="profile-img">{review.author.username.charAt(0).toUpperCase()}</div>
                <p>{review.author.username}</p>
            </div>

            <h2 className="review-book-title">{review.bookTitle}</h2>
            <p className="review-book-author py-3">by {review.bookAuthor}</p>

            <div className="starRating mb-3">
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <FaStar
                            key={index}
                            size={15}
                            color={currentRating <= review.rating ? "#ffc107" : "#e4e5e9"}
                        />
                    );
                })}
            </div>
                
            <p>{review.text}</p>
            {!id && (
                <div className="text-white">
                    <button onClick={() => _handleEditClick(review._id)}>Edit</button>
                    <button onClick={() => _handleDeleteReview(review._id)}>
                        Delete
                    </button>
                </div>
            )}
            <section>
            <CommentForm handleAddComment={(commentFormData) => handleAddComment(commentFormData, review._id)}/>
            {review.comments.map((comment) => (
                <article key={comment._id}>
                    <header>
                        <p>
                            {comment.author.username} {new Date(comment.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                        </p>
                    </header>
                    <p>{comment.text}</p>
                </article>
            ))}
            </section>
        </li>
    ));

    

    return (
        <div>
            <h1 className="py-5 pt-10">Reviews</h1>
            {reviews.length === 0 ? (
                <p className="text-center">No reviews yet</p>
            ) : (
                <div>
                    <ul className="reviewList">
                        {reviewListItems}
                    </ul>
                    {isModalOpen && (
                        <ReviewForm
                            handleAddReview={_handleAddReview}
                            handleUpdateReview={_handleUpdateReview}
                            setIsModalOpen={setIsModalOpen}
                            selectedReviewId={selectedReviewId}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default ReviewPage;