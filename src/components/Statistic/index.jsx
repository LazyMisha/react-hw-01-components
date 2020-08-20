import React from "react";
import styles from "./styles.module.scss";

const Statistic = ({ stats }) => {
  return (
    <div>
      <ul className={styles.stats}>
        {Object.entries(stats).map((stat) => (
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

export default Statistic;
