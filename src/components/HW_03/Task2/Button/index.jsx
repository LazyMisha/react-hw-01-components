import React from "react";
import styles from "./styles.module.scss";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      Load more
    </button>
  );
};

export default Button;
