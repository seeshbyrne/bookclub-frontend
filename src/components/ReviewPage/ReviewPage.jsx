import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from '../ReviewForm/ReviewForm';
import * as reviewService from '../../services/reviewService';
import './ReviewPage.css';
import { AuthedUserContext } from '../../App';
import { FaStar } from 'react-icons/fa';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

    const user = useContext(AuthedUserContext);
    const { id } = useParams();
    const userId = id || user._id;

    const navigate = useNavigate();

    const _handleAddReview = async (reviewFormData) => {
        const newReview = await reviewService.create(reviewFormData);
        setReviews([...reviews, newReview]);
        navigate('/reviews');
    }

    const _handleDeleteReview = async (reviewId) => {
        await reviewService.deleteReview(reviewId);
        const remainingReviews = reviews.filter((review) => review._id !== reviewId);
        setReviews(remainingReviews);
    }

    const reviewListItems = reviews.map((review) => (
        <li key={review._id} className='reviewListItem'>
            <div className="reviewHeader">
                <div className="profile-img">{review.author.username.charAt(0).toUpperCase()}</div>
                <p>{review.author.username}</p>
                <p className="py-3">by {review.bookAuthor}</p>
                <h2>{review.bookTitle}</h2>
            </div>

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
                    <button>Edit</button>
                    <button onClick={() => _handleDeleteReview(review._id)}>
                        Delete
                    </button>
                </div>
            )}
        </li>
    ));

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsData = await reviewService.getUserReviews(userId);
                setReviews(reviewsData);
                console.log()
            } catch (err) {
                setError('Failed to fetch reviews');
                console.error(err);
            }
        };

        fetchReviews();
    }, [userId]);

    return (
        <div>
            <h1 className="py-5 pt-10">Reviews</h1>
            {reviews.length === 0 ? (
                <p>No reviews found</p>
            ) : (
                <div>
                    <ul className="reviewList">
                        {reviewListItems}
                    </ul>
                    <ReviewForm handleAddReview={_handleAddReview}/>
                </div>
            )}
        </div>
    );
};

export default ReviewPage;