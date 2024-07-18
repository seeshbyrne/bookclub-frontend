import { useState, useEffect } from 'react';
import './CommentForm.css'

const CommentForm = ({ handleAddComment, handleEditComment, initialCommentData, reviewId, commentId, resetCommentForm }) => {

    const [formData, setFormData] = useState(initialCommentData || { text: '' });

    useEffect(() => {
        setFormData(initialCommentData || { text: '' });
    }, [initialCommentData]);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (commentId) {
            handleEditComment(reviewId, commentId, formData);
        } else {
            handleAddComment(formData, reviewId);
        }
        setFormData({ text: '' });
        resetCommentForm();
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <label htmlFor="text-input" className='z-0'></label>
            <textarea
                className="rounded mb-3 p-1 pr-16 pl-2 w-full resize-y z-10"
                required
                name="text"
                id="text-input"
                value={formData.text}
                onChange={handleChange}
                rows="3"
                placeholder='Leave a comment'
            />
            <button type="submit"
                className="comment-new top-2 right-2 bg-gray-500 text-white rounded px-3 py-1 mb-3">
                {commentId ? 'Update Comment' : 'Add comment'}
            </button>
        </form>
    );
};

export default CommentForm;