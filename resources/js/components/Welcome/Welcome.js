import React from 'react';
import ReactDOM from 'react-dom';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import Login from "./components/Login";

function Welcome() {
    return (
        <div className="App">
                <div>
                    <h1>Cook Book</h1>
                    {trans("auth.failed")}
                </div>
                <div>
                    <Login />
                </div>

        </div>
    );
}

export default Welcome;

if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
