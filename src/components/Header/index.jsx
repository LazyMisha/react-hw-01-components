import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <h3>HW 01</h3>
          <span>
            <Link to="/react-hw-components/profile">Profile</Link>
          </span>
          <span>
            <Link to="/react-hw-components/statistics">Statistics</Link>
          </span>

          <span>
            <Link to="/react-hw-components/friends">Friends</Link>
          </span>
        </li>
        <li className={styles.link}>
          <h3>HW 02</h3>
          <span>
            <Link to="#">Solution</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
