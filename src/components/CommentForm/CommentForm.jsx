import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommentForm = ({ handleAddComment, handleEditComment, initialCommentData, reviewId, commentId, resetCommentForm }) => { ///////////////////
    // const [formData, setFormData] = useState({ text: '' });
    const [formData, setFormData] = useState(initialCommentData || { text: '' });


    useEffect(() => { ///////////////////////////////////////////////////
        setFormData(initialCommentData || { text: '' });
    }, [initialCommentData]); ////////////////

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });/////KEEP THIS ORIGINAL
    };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (formData._id) {
    //         handleEditComment(formData._id, formData.text);
    //     } else {
    //         handleAddComment(formData);
    //     }
    //     setFormData({ text: '' });
    // };

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
        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="text-input">Your comment:</label>
        //     <textarea
        //         required
        //         type="text"
        //         name="text"
        //         id="text-input"
        //         value={formData.text}
        //         onChange={handleChange}
        //     />
        //     <button type="submit">Submit Comment</button>
        // </form>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text-input">Your comment:</label>
            <textarea
                required
                type="text"
                name="text"
                id="text-input"
                value={formData.text}
                onChange={handleChange}
            />
            <button type="submit">{commentId ? 'Update Comment' : 'Submit Comment'}</button>
        </form>
    );
};

export default CommentForm;