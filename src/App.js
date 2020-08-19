import React, { Component } from "react";
import Profile from "./components/Profile";
import user from "./user.json";

class App extends Component {
  render() {
    return (
      <div>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </div>
    );
  }
}

export default App;
