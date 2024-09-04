import React, { useState } from "react";

export default function Part02ExercisesPhone() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newPersonName, setNewPersonName] = useState("");
  const [newPersonPhone, setNewPersonPhone] = useState("");
  const [searchPerson, setSearchPerson] = useState('');

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
        number: newPersonPhone,
      };
      setPersons(persons.concat(personObj));
    }

    setNewPersonName("");
  };

  const handleChangeName = (event) => {
    setNewPersonName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setNewPersonPhone(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchPerson.toLowerCase())
  );

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchPerson(event.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <input type="text" onChange={handleSearch}/>
      <form onSubmit={handleAddPerson}>
        <p>name</p>
        <input
          type="text"
          placeholder="add name"
          value={newPersonName}
          onChange={handleChangeName}
        />
        <input
          type="text"
          placeholder="add phone"
          value={newPersonPhone}
          onChange={handleChangePhone}
        />
        <button type="submit">add</button>
      </form>
      <h1>Numbers</h1>
      {filteredPersons.map((item) => (
        <p key={item.id}>
          {item.name} {item.number}
        </p>
      ))}
    </div>
  );
}
