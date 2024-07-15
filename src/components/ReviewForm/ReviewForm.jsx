import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './ReviewForm.css';

const ReviewForm = (props) => {
    const initialState = {
        bookId: '',
        text: '',
        rating: 0
    };

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const [formData, setFormData] = useState(initialState);

    const _handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const _handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h3>Review Form</h3>
            <p>**Just putting this here for testing**</p>
            <form onSubmit={ _handleSubmit }>
                <label>
                    BookId:
                    <input
                    name="bookId"
                    value={ formData.bookId }
                    onChange={ _handleChange }
                    required
                    />
                </label>
                <div>
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label>
                                <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                                onChange={ _handleChange }
                                required
                                />
                                <FaStar
                                    className='star'
                                    size={25}
                                    color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        );
                    })}
                </div>
                <label>
                    Your Review:
                    <textarea
                    name="text"
                    value={ formData.text }
                    onChange={ _handleChange }
                    ></textarea>
                </label>
                <button>Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;