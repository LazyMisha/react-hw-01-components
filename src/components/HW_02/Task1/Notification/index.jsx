import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <h1>{message}</h1>;
};

Notification.prototypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
