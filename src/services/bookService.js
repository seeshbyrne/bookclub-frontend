const BASE_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL + '/books';

// Showing All Books
const index = async () => {
    try {
        const response = await fetch(BASE_URL, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

// Showing Book
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

//CREATING NEW REVIEW
const create = async (newReview) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

// UPDATING A REVIEW
const update = async (id, bookFormData) => {
    try {
        const response = await fetch(BASE_URL + '/' + id, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookFormData)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

// DELETING A REVIEW
const deleteReview = async (id) => {
    try {
        const response = await fetch(BASE_URL + '/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const createReview = async (bookId, review) => {
    try {
        const response = await fetch(`${BASE_URL}/${ bookId }/reviews`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export { index, show, create, update, deleteReview, createReview };