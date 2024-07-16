const BASE_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL + '/profiles';

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

export { index };