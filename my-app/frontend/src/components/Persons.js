import React from 'react'

// eslint-disable-next-line react/prop-types
const Persons = ({ persons, removePerson }) => (
  <div>
    <h2>Numbers</h2>
    {/* eslint-disable-next-line react/prop-types */}
    {persons.map((person) => (
      <p key={person.name}>
        {person.name} {person.number}{' '}
        <button type="text" onClick={() => removePerson(person)}>
          delete
        </button>
      </p>
    ))}
  </div>
)

export default Persons
