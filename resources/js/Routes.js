import React from "react";
import { Route, Switch } from "react-router-dom";

import { Welcome, Impressum } from "./components/pages";

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Legal" component={Impressum} />
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
