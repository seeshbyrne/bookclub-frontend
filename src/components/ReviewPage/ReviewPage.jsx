import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as reviewService from '../../services/reviewService';
import './ReviewPage.css';
import { AuthedUserContext } from '../../App';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

    const user = useContext(AuthedUserContext);
    const { id } = useParams();
    const userId = id || user._id;

    const reviewListItems = reviews.map((review) => (
        <li key={review._id} className='reviewListItem'>
            <h2>{review.bookTitle}</h2>
            <p>by {review.bookAuthor}</p>
            <p>Review by: {review.author.username}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.text}</p>
        </li>
    ))

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
            <h1 class="py-5">Reviews</h1>
            {reviews.length === 0 ? (
                <p>No reviews found</p>
            ) : (
                <ul className="reviewList">
                    {reviewListItems}
                </ul>
            )}
        </div>
    );
};

export default ReviewPage;