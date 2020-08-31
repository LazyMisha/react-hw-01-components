import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.button}>
      <button value="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button value="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button value="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
