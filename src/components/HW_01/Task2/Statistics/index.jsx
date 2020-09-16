import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import StatisticItem from "../StatisticItem";

const Statistics = ({ title, stats }) => {
  let statElements = stats.map((stat) => (
    <StatisticItem
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}
    />
  ));

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
