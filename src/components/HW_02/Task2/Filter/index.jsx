import React from "react";

const Filter = ({ onFilter }) => (
  <div>
    <label>Find contacts by name</label>
    <input onChange={onFilter}></input>
  </div>
);

export default Filter;
