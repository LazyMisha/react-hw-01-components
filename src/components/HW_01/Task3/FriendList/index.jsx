import React from "react";
import styles from "./styles.module.scss";
import FriendItem from "../FriendItem";
import friends from "../../../../resources/friend-list.json";

const FriendList = () => {
  let friendElement = friends.map((friend) => (
    <FriendItem
      key={friend.id}
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

export default FriendList;
