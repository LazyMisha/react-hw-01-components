import React from "react";
import styles from "./styles.module.scss";
import Stat from "../Stat";

const Description = ({ avatar, name, tag, location, stats }) => {
  return (
    <div>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <Stat stats={stats} />
    </div>
  );
};

export default Description;
