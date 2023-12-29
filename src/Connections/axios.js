import axios from "axios";

const api = axios.create({

    baseURL: 'http://localhost:4000'
    // baseURL: `http://192.168.0.2:4000`
    // baseURL: `https://study-api-fjri.onrender.com`

})

export default api;