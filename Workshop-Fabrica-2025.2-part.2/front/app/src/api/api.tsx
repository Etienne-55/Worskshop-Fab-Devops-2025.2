import axios from 'axios';

const api_connection = axios.create({
    baseURL: 'https://localhost/api', // Replace with your API base URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default api_connection;
