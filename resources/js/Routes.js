import React from "react";
import { Route, Switch } from "react-router-dom";
import { Welcome, Impressum, Home } from "./components/pages";
import { AuthenticatedRoute } from "./components/atoms";
import AuthLayout from "./components/organisms/AuthLayout";

class Routes extends React.Component {
  render () {
    const AuthenticatedRoutes = () => {
      return (
        <AuthLayout>
          <Switch>
            <AuthenticatedRoute
              exact path="/home" component={Home}
            />
          </Switch>
        </AuthLayout>
      );
    };

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route
            exact path="/Legal" component={Impressum}/>
          <Route component={AuthenticatedRoutes}/>
          <Route
            render={function () {
              return <h1>Not Found</h1>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
