import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const TransactionHistory = ({ items }) => {
  let transactionElement = items.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionElement}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default TransactionHistory;
