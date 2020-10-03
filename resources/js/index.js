import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/atoms";
import Routes from "./Routes";
import { Provider } from "mobx-react";
import { RecipeStore, AuthStore } from "./components/atoms/Stores";

function Index () {
  return (
    <Provider recipeStore={RecipeStore} authStore={AuthStore}>
      <Router>
        <ScrollToTop>
          <div className="flyout">
            <main>
              <Routes />
            </main>
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default Index;

if (document.getElementById("index")) {
  ReactDOM.render(<Index />, document.getElementById("index"));
}
