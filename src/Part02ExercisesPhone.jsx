import React, { useState } from "react";

export default function Part02ExercisesPhone() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Ada Lovelace",
    },
    {
      id: 2,
      name: "Arto Hellas",
    },
  ]);

  const [newPersonName, setNewPersonName] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some(
      (person) => person.name === newPersonName
    );

    if (personExists) {
      alert("This person is already in the phonebook");
    } else {
      const personObj = {
        id: persons.length ? Math.max(persons.map((p) => p.id)) + 1 : 1,
        name: newPersonName,
      };
      setPersons(persons.concat(personObj));
    }

    setNewPersonName("");
  };

  const handleChangeName = (event) => {
    setNewPersonName(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleAddPerson}>
        <p>name</p>
        <input
          type="text"
          placeholder="add name"
          value={newPersonName}
          onChange={handleChangeName}
        />
        <button type="submit">add</button>
      </form>
      <h1>Numbers</h1>
      {persons.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
