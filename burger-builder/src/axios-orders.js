import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-2fc0d-default-rtdb.firebaseio.com/"
});

export default instance;