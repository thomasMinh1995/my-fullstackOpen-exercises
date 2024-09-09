import axios from "axios";

const baseURL = 'http://localhost:3001/notes';

const getAll = () => {
    return axios.get(baseURL)
}

const create = (obj) => {
    return axios.post(baseURL, obj)
}

export default {
    getAll: getAll,
    create: create
}