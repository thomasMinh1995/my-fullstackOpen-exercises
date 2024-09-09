import React, { useEffect, useState } from 'react'
import phoneServices from './services/phoneNumbers';

export default function Part02ExercisesServer() {
   const [persons, setPersons] = useState([]);
   const [newPhoneNumber, setNewPhoneNumber] = useState('')
   const [newName, setNewName] = useState('')

   useEffect(() => {
    phoneServices.getAllPhoneNumber().then(response => setPersons(response.data))
   }, [])

   const handleSubmit = (event) => {
     event.preventDefault();
     const newPersonObj = {
        id: String(persons.length + 1),
        number: newPhoneNumber,
        name: newName
     }
     phoneServices.createNewPerson(newPersonObj);
     setPersons(persons.concat(newPersonObj));
   }

   const handleDelete = (id) => {
    console.log('vent', id)
    phoneServices.deletePerson(id);
    setPersons(persons.filter(item => item.id !== id))
   }

   const handleChangeName = (event) => {
     event.preventDefault();
     setNewName(event.target.value);
   }

   const handleChangeNumber = (event) => {
    event.preventDefault();
    setNewPhoneNumber(event.target.value);
   }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p>name: <input type="text" placeholder='Add name here' onChange={handleChangeName}/>  </p>
            <p>phone: <input type="text" placeholder='Add phone here' onChange={handleChangeNumber}/>  </p>
            <button>Save</button>
        </form>
        {
            persons.map((item) => (
                <p key={item.id}>
                    {item.name} {item.number} <button onClick={() => handleDelete(item.id)}>Delete</button>
                </p>
            ))
        }
    </div>
  )
}
