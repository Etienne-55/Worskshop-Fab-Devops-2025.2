import axios from 'axios';

const api_connection = axios.create({
    baseURL: 'http://localhost:8000/api', // Replace with your API base URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default api_connection;