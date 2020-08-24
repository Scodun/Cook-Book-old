import React from "react";
import { Route, Switch } from "react-router-dom";

import { Welcome, Impressum, Home } from "./components/pages";

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Legal" component={Impressum} />
        <Route exact path="/Home" component={Home} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
