import React, { Component } from "react";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = (event) => {
    let value = event.target.value;
    switch (value) {
      case "good":
        this.setState(
          {
            good: this.state.good + 1,
            total: this.state.total + 1,
          },
          function () {
            this.setState({
              positivePercentage: Math.round(
                (this.state.good / this.state.total) * 100
              ),
            });
          }
        );
        break;
      case "neutral":
        this.setState(
          {
            neutral: this.state.neutral + 1,
            total: this.state.total + 1,
          },
          function () {
            this.setState({
              positivePercentage: Math.round(
                (this.state.good / this.state.total) * 100
              ),
            });
          }
        );
        break;
      case "bad":
        this.setState(
          {
            bad: this.state.bad + 1,
            total: this.state.total + 1,
          },
          function () {
            this.setState({
              positivePercentage: Math.round(
                (this.state.good / this.state.total) * 100
              ),
            });
          }
        );
        break;
      default:
        break;
    }
  };

  getStatistic = () => {
    if (this.state.total > 0) {
      return (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      );
    } else {
      return <Notification message="No feedback given" />;
    }
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        {this.getStatistic()}
      </Section>
    );
  }
}

export default Feedback;
