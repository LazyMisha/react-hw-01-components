import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styles from "./styles.module.scss";

const Stat = ({ stats }) => {
  return (
    <div>
      <ul className={styles.stats}>
        {Object.entries(stats).map((stat) => (
          <li key={uuid()}>
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

Stat.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Stat;
