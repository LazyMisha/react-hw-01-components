import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/HW_01/Task1/Profile";
import Statistics from "./components/HW_01/Task2/Statistics";
import Header from "./components/Header";
import FriendList from "./components/HW_01/Task3/FriendList";
import TransactionHistory from "./components/HW_01/Task4/TransactionHistory";
import Feedback from "./components/HW_02/Task1/Feedback";
import Phonebook from "./components/HW_02/Task2/Phonebook";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <>
          <Header />

          <Route
            path="/react-hw-01-components/statistics"
            render={() => (
              <Statistics
                title={props.state.statisticsComponent.title}
                stats={props.state.statisticsComponent.statisticalData}
              />
            )}
          />
          <Route
            path="/react-hw-01-components/profile"
            render={() => (
              <Profile user={props.state.profileComponent.profileUser} />
            )}
          />
          <Route
            path="/react-hw-01-components/friends"
            render={() => (
              <FriendList
                friends={props.state.friendListComponent.friendList}
              />
            )}
          />
          <Route
            path="/react-hw-01-components/transactions"
            render={() => (
              <TransactionHistory
                items={props.state.transactionHistoryComponent.transactions}
              />
            )}
          />
          <Route path="/react-hw-01-components/feedback" component={Feedback} />
          <Route
            path="/react-hw-01-components/phonebook"
            component={Phonebook}
          />
        </>
      </Switch>
    </Router>
  );
};

export default App;
