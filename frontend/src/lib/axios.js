import axios from "axios";
const api = axios.create({
    baseURL: `https://student-event-participation-system.onrender.com/participants`
})
export default api
