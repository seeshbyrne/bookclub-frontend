const BASE_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL + '/reviews';

// Index
const index = async () => {
    try {
        const response = await fetch(BASE_URL, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.json();
    } catch (error) {
        console.error('Error fetching user reviews:', error);
    }
};

// Show
const show = async (id) => {
    try {
        const response = await fetch(BASE_URL + '/' + id, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.json();
    } catch (error) {
        console.error(error)
    }
};

// get reviews by userId
const getUserReviews = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.json();
    } catch (error) {
        console.error('Error fetching user reviews:', error);
    }
};

// Create a new review
const create = async (reviewData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        });
        return response.json();
    } catch (error) {
        console.error('Error creating review:', error);
    }
};

// Update an existing review
const update = async (id, reviewData) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        });
        return response.json();
    } catch (error) {
        console.error(`Error updating review with ID ${id}:`, error);
    }
};

// Delete a review
const deleteReview = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.json();
    } catch (error) {
        console.error(`Error deleting review with ID ${id}:`, error);
    }
};

const createComment = async (reviewId, comment) => {
    try {
        const response = await fetch(`${BASE_URL}/${ reviewId }/comments`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export {
    index,
    show,
    getUserReviews,
    create,
    update,
    deleteReview,
    createComment
};
