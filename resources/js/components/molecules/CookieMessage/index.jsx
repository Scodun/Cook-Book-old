import React from "react";
import { Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

class CookieMessage extends React.Component {
  componentDidMount () {
    const key = "openCookie";
    const btn = (
      <div>
        <Button type="primary" size="small" className="mr-1" onClick = {this.onClickAccept}>
          {trans("general.confirm")}
        </Button>

        <Button type="primary" size="small" onClick={this.onClickRedirect}>
          {trans("general.information")}
        </Button>
      </div>
    );
    if (!Cookies.get("cookies")) {
      notification.open({
        message: "Cookies 🍪",
        description: trans("general.cookie_message"),
        btn,
        key,
        duration: 0
      });
    }
  }

    onClickRedirect = () => {
      this.props.history.push("/legal");
    }

    onClickAccept=() => {
      notification.close("openCookie");
      Cookies.set("cookies", true);
    }

    render () {
      return null;
    }
}

export default withRouter(CookieMessage);
