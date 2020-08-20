import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate (prevProps) {
    // eslint-disable-next-line react/prop-types
    const { location } = this.props;

    // eslint-disable-next-line react/prop-types
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);
