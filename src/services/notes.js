import axios from "axios";

const baseURL = 'http://localhost:3001/notes';

const getAll = () => {
    return axios.get(baseURL)
}

const create = (obj) => {
    return axios.post(baseURL, obj)
}

const update = (id, newObject) => {
    return axios.put(`${baseURL}/${id}`, newObject)
  }

export default {
    getAll: getAll,
    create: create,
    update: update
}