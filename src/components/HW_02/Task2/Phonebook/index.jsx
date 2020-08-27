import React, { Component } from "react";
import styles from "./styles.module.scss";
import Form from "../Form";
import ContactList from "../ContactsList";
import Filter from "../Filter";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleAddContact = (contact) => {
    this.state.contacts.filter((cont) => {
      return cont.name.toLowerCase() === contact.name.toLowerCase();
    }).length > 0
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, contact],
        }));
  };

  handleFilter = (event) => this.setState({ filter: event.target.value });

  handleDelete = (id) => {
    let filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: filteredContacts });
  };

  render() {
    return (
      <div className={styles.phonebook}>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
