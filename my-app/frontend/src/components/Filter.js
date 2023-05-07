import React from "react";

// eslint-disable-next-line react/prop-types
const Filter = ({ handleChange, newFilter }) => (
  <div>
    filter shown with
    <input
      type="text"
      name="filter"
      onChange={handleChange}
      value={newFilter}
    />
  </div>
);

export default Filter;
