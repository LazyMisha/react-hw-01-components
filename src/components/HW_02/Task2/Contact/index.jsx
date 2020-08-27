import React from "react";
import styles from "./styles.module.scss";

const Contact = ({ contact, onDelete }) => (
  <li className={styles.contactItem}>
    {contact.name}: {contact.number}
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default Contact;
