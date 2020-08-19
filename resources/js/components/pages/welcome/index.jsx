import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from "antd";
import "antd/dist/antd.css";
import { Login } from "../../molecules";
import CookieMessage from "../../molecules/CookieMessage";

const { Title } = Typography;

function Index() {
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
                    <path fill="#f5f7fa" fillOpacity="1" d="M0,160L40,160C80,160,160,160,240,144C320,128,400,96,480,85.3C560,75,640,85,720,106.7C800,128,880,160,960,149.3C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"/>
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

export default Index;
