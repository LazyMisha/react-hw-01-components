import React from "react";
import styles from "./styles.module.scss";

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
