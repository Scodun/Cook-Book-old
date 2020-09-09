import React from "react";
import { Route, Switch } from "react-router-dom";
import { Welcome, Impressum, Home, RecipeAdd,RecipeView } from "./components/pages";
import { AuthenticatedRoute } from "./components/atoms";
import AuthLayout from "./components/organisms/AuthLayout";

class Routes extends React.Component {
  render () {
    const AuthenticatedRoutes = () => {
      return (
        <AuthLayout>
          <Switch>
            <AuthenticatedRoute exact path="/home" component={Home}/>
            <AuthenticatedRoute exact path="/recipes/add" component={RecipeAdd}/>
            <AuthenticatedRoute exact path="/recipes/view" component={RecipeView}/>
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
