import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from "antd";
import "antd/dist/antd.css";
import Login from "./components/Login";
import CookieMessage from "../../molecules/CookieMessage";

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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f5f7fa" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,176C672,203,768,213,864,197.3C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </section>
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
            <CookieMessage/>
        </div>
    );
}

export default Welcome;
