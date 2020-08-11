import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from "antd";
import "antd/dist/antd.css";
import Login from "./components/Login";

const { Title } = Typography;

function Welcome() {
    return (
        <div className="welcomePage">
            <section className="top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-left">
                            <Title>Cook Book</Title>
                            <Title level={3}>{trans("welcome.description")}</Title>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <Login/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill="#04ADBF" fillOpacity="1" d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
            </svg>
            <section className="mid py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-left">

                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Welcome;
