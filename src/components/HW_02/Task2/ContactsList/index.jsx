import React from "react";
import PropTypes from "prop-types";
import "./styles.module.scss";
import Contact from "../Contact";

const ContactsList = ({ filter, contacts, onDelete }) => {
  return (
    <ul>
      {contacts
        .filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
    </ul>
  );
};

ContactsList.prototypes = {
  filter: PropTypes.string.isRequired,
  contact: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
