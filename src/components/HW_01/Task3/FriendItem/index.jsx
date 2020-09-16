import React from "react";
import styles from "./styles.module.scss";

const getStatusColor = (isOnline) => {
  return isOnline ? "#00ff00" : "#ff0000";
};

const FriendItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: getStatusColor(isOnline) }}
      />
      <img className={styles.avatar} src={avatar} alt="" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendItem;
