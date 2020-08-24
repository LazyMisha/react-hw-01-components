import React, { Component } from "react";
import Description from "../Description";
import user from "../../../resources/user.json";
import styles from "./styles.module.scss";

class Profile extends Component {
  render() {
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
  }
}

export default Profile;
