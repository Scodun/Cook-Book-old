import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/pages/welcome/Welcome";
import Legal from "./components/structure/Legal";


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/Legal" component={Legal} />
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

