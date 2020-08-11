import React from "react";
import { withRouter } from "react-router-dom";

class Index extends React.Component {
    componentDidUpdate(prevProps) {
        const { location } = this.props;

        if (location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(Index);

