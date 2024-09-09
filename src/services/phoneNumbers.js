import axios from "axios";

const baseURL = 'http://localhost:3001/persons';

const getAllPhoneNumber = () => {
    return axios.get(baseURL)
}

const createNewPerson = (newObj) => {
    return axios.post(baseURL, newObj)
}

const deletePerson = (id) => {
    return axios.delete(`${baseURL}/${id}`)
        .then(() => id) // Return the ID so it can be used in the component if needed
        .catch(error => {
        console.log('id', id);

            console.error('Failed to delete person:', error);
            throw error; // Re-throw to handle in the component if needed
        });
}
export default {getAllPhoneNumber, createNewPerson, deletePerson}