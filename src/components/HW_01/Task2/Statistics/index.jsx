import React from "react";
import styles from "./styles.module.scss";
import StatisticItem from "../StatisticItem";
import stats from "../../../../resources/statistical-data.json";

const Statistics = () => {
  let statElements = stats.map((stat) => (
    <StatisticItem
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}
    />
  ));

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload Stats</h2>
      <ul className={styles.statlist}>{statElements}</ul>
    </section>
  );
};

export default Statistics;
