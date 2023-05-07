/*eslint-disable react/prop-types*/

import React from 'react'

const PersonForm = ({
  addPerson,
  handleNameChange,
  newName,
  handleNumberChange,
  newNumber,
}) => (
  <div>
    <h2>Add a new</h2>

    <form onSubmit={addPerson}>
      <div>
        name:
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={newName}
        />
        <div>
          number:
          <input
            type="text"
            name="number"
            onChange={handleNumberChange}
            value={newNumber}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
)

export default PersonForm
