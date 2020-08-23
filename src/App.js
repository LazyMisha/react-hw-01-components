import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from "./statistical-data.json";
import friendList from "./friend-list.json";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import Header from "./components/Header";
import FriendList from "./components/FriendList";

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
        </>
      </Switch>
    </Router>
  );
};

export default App;
