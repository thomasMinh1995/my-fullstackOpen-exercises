import axios from "axios";

const baseURL = 'http://localhost:3001/persons';

const getAllPhoneNumber = () => {
    return axios.get(baseURL)
}

const createNewPerson = (newObj) => {
    return axios.post(baseURL, newObj)
}

const deletePerson = (id) => {
    return axios.delete(baseURL + '/' + id);
}
export default {getAllPhoneNumber, createNewPerson, deletePerson}