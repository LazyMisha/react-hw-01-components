import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const getColor = () => {
  return "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
};

const Statistics = ({ title, stats }) => {
  let statElements = stats.map((stat) => {
    return (
      <li
        key={stat.id}
        className={styles.item}
        style={{
          backgroundColor: getColor(),
        }}
      >
        <span className={styles.label}>{stat.label}</span>
        <span className={styles.percentage}>{stat.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statlist}>{statElements}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
