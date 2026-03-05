import axios from "axios";
const api = axios.create({
    baseURL: `https://student-event-participation-system.onrender.com/`
})
export default api
