import React, { useState } from "react";
import styles from "./styles.module.scss";

const Searchbar = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchform} onSubmit={handleSubmit}>
        <button type="submit" className={styles["searchform-button"]}>
          <span className={styles["searchform-buttom-label"]}>Search</span>
        </button>
        <input
          value={text}
          onChange={handleChangeInput}
          className={styles["searchform-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
