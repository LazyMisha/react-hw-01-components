import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import routes from "./header-routers";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Switch>
          <>
            <Header />
            {routes.map(({ path, component: Component }) => (
              <Route exact path={path} component={Component} key={path} />
            ))}
          </>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
