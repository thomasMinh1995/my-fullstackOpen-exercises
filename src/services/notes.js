import axios from "axios";

// const baseURL = 'http://localhost:3001/notes';

const baseURL = 'http://localhost:3001/api/notes';

const getAll = () => {
    return axios.get(baseURL)
}

const getDetail = (id) => {
    return axios.get(`${baseURL}/${id}`)
}

const create = (obj) => {
    return axios.post(baseURL, obj)
}

//TODO
const update = (id, newObject) => {
    return axios.put(`${baseURL}/${id}`, newObject)
  }

const deleteItem = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

const toggleImportant = (id, objImportant) => {
    return axios.patch(`${baseURL}/${id}`, objImportant)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    delete: deleteItem,
    toggleImportant: toggleImportant,
    getDetail: getDetail,
}