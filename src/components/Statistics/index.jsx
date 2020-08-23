import React from "react";
import styles from "./styles.module.scss";

const getColor = () => {
  return "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statlist}>
        {stats.map((obj) => (
          <li
            key={obj.id}
            className={styles.item}
            style={{
              backgroundColor: getColor(),
            }}
          >
            <span className={styles.label}>{obj.label}</span>
            <span className={styles.percentage}>{obj.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
