import React, { Component } from "react";
import Cookies from "js-cookie";
import { Button } from "antd";

class Home extends Component {
     Logout = function () {
       Cookies.remove("access_token");
     };

     render () {
       return (
         <div>
           <span>Whatever normally goes into the home/index page; A Plea To Heal The World for instance</span>
           <Button type="primary" htmlType="submit" onClick={this.Logout}>Logout</Button>
         </div>
       );
     }
}
export default Home;
