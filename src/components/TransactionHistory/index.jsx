import React from "react";
import styles from "./styles.module.scss";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
