import React, { useState } from "react";

export default function Part02ExercisesPhone() {
  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Ada Lovelace",
    },
    {
      id: 2,
      name: "Arto Hellas",
    },
  ]);

  const [newPerson, setNewPerson] = useState({
    name: ''
  })

  const handleAddPerson = (event) => {
    event.preventDefault();
    const personObj = {
        id: Math.floor(person.length + 1),
        name: newPerson
    }
    console.log('newPerson', newPerson);
    console.log('personObj', personObj);
    if(JSON.stringify(personObj) === JSON.stringify(newPerson)){
        alert('hello')
    }else {
        setPerson(person.concat(personObj))
    }
    setNewPerson('');
    console.log('person', person);
  }

  const handleChangeName = (event) => {
    event.preventDefault();
    setNewPerson(event.target.value);
    console.log(newPerson);
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleAddPerson}>
         <p>name</p>
         <input type="text" placeholder="add name" onChange={handleChangeName}/>
         <button>add</button>
      </form>
      <h1>Numbers</h1>
      {person.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
