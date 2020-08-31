import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import "./styles.module.scss";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  capitalizeFirstChar = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.name || !this.state.number) {
      return;
    }

    let name = this.capitalizeFirstChar(this.state.name);
    let number = this.state.number;

    this.props.onSubmit({ id: uuid(), name, number });
    this.setState({ name: "", number: "" });
  };

  handleInputChange = (event) => {
    event.target.name === "name"
      ? this.setState({ name: event.target.value })
      : this.setState({ number: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label>Number</label>
        <input
          type="number"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <button>Add contact</button>
      </form>
    );
  }
}

Form.prototypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
