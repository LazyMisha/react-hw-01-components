import React from "react";
import Description from "../Description";

import styles from "./styles.module.scss";

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <Description
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
};

export default Profile;
