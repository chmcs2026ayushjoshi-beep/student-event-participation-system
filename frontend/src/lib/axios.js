import axios from "axios";
const api = axios.create({
    baseURL: `https://seps-backend.onrender.com`
})
export default api
