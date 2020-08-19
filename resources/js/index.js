import React from 'react';
import { Layout } from 'antd';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { ScrollToTop } from "./components/atoms";
import { CustomFooter } from "./components/molecules";
import Routes from "./Routes";


class Index extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <div className="flyout">

                        <main>
                            <Routes />
                        </main>
                        <CustomFooter />
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
