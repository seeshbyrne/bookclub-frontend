import { useState } from 'react';

const CommentForm = ({ handleAddComment }) => {
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddComment(formData);
    setFormData({ text: '' });
  };

  return (
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
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;
