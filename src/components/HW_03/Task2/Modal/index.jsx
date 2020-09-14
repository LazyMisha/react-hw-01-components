import React from "react";
import styles from "./styles.module.scss";

const Modal = ({ image }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
