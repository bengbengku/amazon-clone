import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:5001/e-challenge-a9648/us-central1/api',
});

export default instance;