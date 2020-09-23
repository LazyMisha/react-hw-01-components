import React from "react";
import styles from "./styles.module.scss";
import items from "../../../../resources/transaction-history.json";

const TransactionHistory = () => {
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

export default TransactionHistory;
