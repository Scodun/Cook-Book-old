import React from "react";
import { Route, Switch } from "react-router-dom";
import { Welcome, Impressum, Home } from "./components/pages";
import { AuthenticatedRoute } from "./components/atoms";

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route
          exact path="/Legal" component={Impressum}/>
        <AuthenticatedRoute
          exact path="/home" component={Home}
        />
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
