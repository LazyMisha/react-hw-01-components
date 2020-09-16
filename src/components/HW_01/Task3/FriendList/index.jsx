import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import FriendItem from "../FriendItem";

const FriendList = ({ friends }) => {
  let friendElement = friends.map((friend) => (
    <FriendItem
      id={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return (
    <div className={styles.container}>
      <ul className={styles.friendlist}>{friendElement}</ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default FriendList;
