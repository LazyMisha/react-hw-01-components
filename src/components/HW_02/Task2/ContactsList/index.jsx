import React from "react";
import styles from "./styles.module.scss";
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

export default ContactsList;
