import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from "./statistical-data.json";
import friendList from "./friend-list.json";
import transactions from "./transaction-history.json";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

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
        </>
      </Switch>
    </Router>
  );
};

export default App;
