import React from "react";
import { Layout } from "antd";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const { Footer } = Layout;

function CustomFooter () {
  return (
    <Footer style={{ textAlign: "center" }}>
      { trans("general.footer") + " "}
      <Link to="/Legal">Legal</Link>
    </Footer>
  );
}

export default CustomFooter;

if (document.getElementById("footer")) {
  ReactDOM.render(<CustomFooter />, document.getElementById("footer"));
}
