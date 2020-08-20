import React from "react";
import styles from "./styles.module.scss";
import Statistic from "../Statistic";

const Description = ({ avatar, name, tag, location, stats }) => {
  return (
    <div>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <Statistic stats={stats} />
    </div>
  );
};

export default Description;
