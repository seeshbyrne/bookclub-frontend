import React, { useEffect, useState } from 'react';
import * as reviewService from '../../services/reviewService';
import './ReviewPage.css';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

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
                const reviewsData = await reviewService.index();
                setReviews(reviewsData);
            } catch (err) {
                setError('Failed to fetch reviews');
                console.error(err);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div>
            <h1>Reviews</h1>
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