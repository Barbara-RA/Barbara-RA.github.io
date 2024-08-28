import axios from "axios";

var apiUrl = 'https://apisunsale.azurewebsites.net/api';

const api = axios.create({
    baseURL: apiUrl
})

export default api;