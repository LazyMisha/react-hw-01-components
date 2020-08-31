import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilter }) => (
  <div>
    <label>Find contacts by name</label>
    <input onChange={onFilter} />
  </div>
);

Filter.prototypes = {
  onFilter: PropTypes.string.isRequired,
};

export default Filter;
