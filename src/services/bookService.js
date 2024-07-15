const BASE_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL + '/books';

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

const create = async (newBook) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

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

const deleteBook = async (id) => {
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

export { index, show, create, update, deleteBook, createReview };