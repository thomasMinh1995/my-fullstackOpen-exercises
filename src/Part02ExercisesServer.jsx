import React, { useEffect, useState } from 'react';
import phoneServices from './services/phoneNumbers';
// {
//     "persons": [
//       {
//         "name": "Arto Hellas",
//         "number": "040-123456",
//         "id": "1"
//       },
//       {
//         "name": "Dan Abramov",
//         "number": "12-43-234345",
//         "id": "3"
//       }
//     ]
//   }
export default function Part02ExercisesServer() {
  const [persons, setPersons] = useState([]);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newName, setNewName] = useState('');

// const baseURL = 'http://localhost:3001/notes';
  useEffect(() => {
    phoneServices.getAllPhoneNumber()
      .then(response => setPersons(response.data))
      .catch(error => console.error('Failed to fetch phone numbers:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName === '' || newPhoneNumber === '') {
      alert('Both name and phone number are required');
      return;
    }
    const newPersonObj = {
        name: newName,
        number: newPhoneNumber,
    };

    phoneServices.createNewPerson(newPersonObj)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewPhoneNumber('');
        // }        
      })
      .catch(error => console.error('Failed to create new person:', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      phoneServices.deletePerson(id)
        .then(() => {
          setPersons(persons.filter(item => item.id !== id));
        })
        .catch(error => console.error('Failed to delete person:', error));
    }
          setPersons(persons.filter(item => item.id !== id));
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          Name:
          <input
            type="text"
            placeholder='Add name here'
            value={newName}
            onChange={handleChangeName}
          />
        </p>
        <p>
          Phone:
          <input
            type="text"
            placeholder='Add phone here'
            value={newPhoneNumber}
            onChange={handleChangeNumber}
          />
        </p>
        <button type="submit">Save</button>
      </form>
      {persons.map((item) => (
        <p key={item.id}>
          {item.name} {item.number}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
}
