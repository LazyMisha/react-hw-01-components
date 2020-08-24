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
            <Link to="/react-hw-01-components/profile">Profile</Link>
          </span>
          <span>
            <Link to="/react-hw-01-components/statistics">Statistics</Link>
          </span>
          <span>
            <Link to="/react-hw-01-components/friends">Friends</Link>
          </span>
          <span>
            <Link to="/react-hw-01-components/transactions">Transactions</Link>
          </span>
        </li>
        <li className={styles.link}>
          <h3>HW 02</h3>
          <span>
            <Link to="/react-hw-01-components/feedback">Feedback</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
