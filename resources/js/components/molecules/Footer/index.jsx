import React from 'react';
import { Layout } from 'antd';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const { Footer } = Layout;


class CustomFooter extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Cook Book ©2020 Created by Raphael Burgstaller - <Link to="/Legal">Legal</Link>
            </Footer>
        );
    }
}

export default CustomFooter;

if (document.getElementById('footer')) {
    ReactDOM.render(<CustomFooter />, document.getElementById('footer'));
}
