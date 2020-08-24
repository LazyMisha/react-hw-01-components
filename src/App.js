import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from "./resources/statistical-data.json";
import friendList from "./resources/friend-list.json";
import transactions from "./resources/transaction-history.json";
import Profile from "./components/HW_01/Profile";
import Statistics from "./components/HW_01/Statistics";
import Header from "./components/Header";
import FriendList from "./components/HW_01/FriendList";
import TransactionHistory from "./components/HW_01/TransactionHistory";
import Feedback from "./components/HW_02/Feedback";

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Header />
          <Route
            path="/react-hw-01-components/statistics"
            render={() => <Statistics title="Upload Stats" stats={data} />}
          />
          <Route path="/react-hw-01-components/profile" component={Profile} />
          <Route
            path="/react-hw-01-components/friends"
            render={() => <FriendList friends={friendList} />}
          />
          <Route
            path="/react-hw-01-components/transactions"
            render={() => <TransactionHistory items={transactions} />}
          />
          <Route path="/react-hw-01-components/feedback" component={Feedback} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
