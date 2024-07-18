import { useState, useEffect } from 'react';

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="text-input"></label>
            <textarea
                className="rounded"
                required
                type="text"
                name="text"
                id="text-input"
                value={formData.text}
                onChange={handleChange}
            />
            <button type="submit" className="px-2 py-1 mb-2 ml-3" >{commentId ? 'Update Comment' : 'Add comment'}</button>
        </form>
    );
};

export default CommentForm;