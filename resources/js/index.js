import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/atoms";
import Routes from "./Routes";

function Index () {
  return (
    <Router>
      <ScrollToTop>
        <div className="flyout">
          <main>
            <Routes />
          </main>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default Index;

if (document.getElementById("index")) {
  ReactDOM.render(<Index />, document.getElementById("index"));
}
