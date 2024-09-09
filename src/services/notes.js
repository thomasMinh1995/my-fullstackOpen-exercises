import axios from "axios";

const baseURL = 'http://localhost:3001/notes';

const getAll = () => {
    return axios.get(baseURL)
}

export default {
    getAll: getAll
}