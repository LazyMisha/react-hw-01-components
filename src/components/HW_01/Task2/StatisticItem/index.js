import React from "react";
import styles from "./styles.module.scss";

const getColor = () => {
  return "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
};

const StatisticItem = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      className={styles.item}
      style={{ backgroundColor: getColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticItem;
