import React from "react";
import styles from "./styles.module.scss";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={props.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>
      <ul className={styles.stats}>
        {Object.entries(props.stats).map((stat) => (
          <li>
            <span className={styles.label}>
              {stat[0].charAt(0).toUpperCase() + stat[0].slice(1)}
            </span>
            <span className={styles.quantity}>{stat[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
