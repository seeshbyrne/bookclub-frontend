import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewForm.css';
import * as reviewService from '../../services/reviewService';

const ReviewForm = (props) => {
    const initialState = {
        bookId: '',
        bookTitle: '',
        bookAuthor: '',
        text: '',
        rating: 0
    };

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [formData, setFormData] = useState(props.initialState || initialState);
    const [isOpen, setIsOpen] = useState(false);

    const id = props.selectedReviewId;

    useEffect(() => {
        const fetchReview = async () => {
            const reviewData = await reviewService.show(id);
            setFormData(reviewData);
        };
        if (id) {
            fetchReview();
            setIsOpen(true);
        }
    }, [id]);

    const closeModal = () => {
        setIsOpen(false);
        props.setIsModalOpen(false);
        setFormData(props.initialState || initialState);
    }

    const _handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const _handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        if (id) {
            props.handleUpdateReview(formData);
        } else {
            props.handleAddReview(formData);
        }
        props.setIsModalOpen(false);
    };

    return (
        <>
            {props.selectedReviewId ? null : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="modal-trigger-button text-black font-semibold py-2 px-4 mb-10 rounded-md shadow-sm focus:outline-none w-[175px]"
                >
                    Create a Review
                </button>
            )}

            {isOpen && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-center">
                                            <h3 className="text-base font-semibold leading-7 text-gray-900" id="modal-title">
                                                {props.selectedReviewId ? 'Edit review' : 'Create a review'}
                                            </h3>
                                        </div>
                                    </div>

                                    <form onSubmit={_handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                            <div className="sm:col-span-4">
                                            </div>

                                            <div className="sm:col-span-4">
                                                <h2 className="font-medium text-2xl">{formData.bookTitle}</h2>
                                            </div>

                                            <div className="sm:col-span-4">
                                                <h4>by {formData.bookAuthor}</h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-row">
                                            {[...Array(5)].map((star, index) => {
                                                const currentRating = index + 1;
                                                return (
                                                    <label key={index}>
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            value={currentRating}
                                                            onClick={() => setRating(currentRating)}
                                                            onChange={_handleChange}
                                                            required
                                                            className="sr-only"
                                                        />
                                                        <FaStar
                                                            className="star cursor-pointer"
                                                            size={25}
                                                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                            onMouseEnter={() => setHover(currentRating)}
                                                            onMouseLeave={() => setHover(null)}
                                                        />
                                                    </label>
                                                );
                                            })}
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                                Your Review
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    name="text"
                                                    id="text"
                                                    rows="3"
                                                    value={formData.text}
                                                    onChange={_handleChange}
                                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                                            >
                                                {props.selectedReviewId ? 'Update Review' : 'Submit Review'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => closeModal()}
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReviewForm;