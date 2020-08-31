import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const getStatusColor = (isOnline) => {
  return isOnline ? "#00ff00" : "#ff0000";
};

const FriendList = ({ friends }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.friendlist}>
        {friends.map((friend) => (
          <li key={friend.id} className={styles.item}>
            <span
              className={styles.status}
              style={{ backgroundColor: getStatusColor(friend.isOnline) }}
            />
            <img className={styles.avatar} src={friend.avatar} alt="" />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default FriendList;
