import React, { useEffect, useState } from 'react';
import * as reviewService from '../services/reviewService';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

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
                <ul>
                    {reviews.map((review) => (
                        <li key={review._id}>
                            <h2>{review.bookTitle}</h2>
                            <p>by {review.bookAuthor}</p>
                            <p>Review by: {review.author.name}</p>
                            <p>Rating: {review.rating}</p>
                            <p>{review.text}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewPage;