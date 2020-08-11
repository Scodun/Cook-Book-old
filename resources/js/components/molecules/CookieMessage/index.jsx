import React from 'react';
import { Button, notification } from 'antd';
import {withRouter} from 'react-router-dom';

class CookieMessage extends React.Component {
    onClickRedirect = () => {
            this.props.history.push('/legal');
    }
    componentDidMount() {
            const key = `open${Date.now()}`;
            const btn = (
                <div>
                    <Button type="primary" size="small" className="mr-1" onClick={() => notification.close(key) }>
                        {trans("general.confirm")}
                    </Button>

                    <Button type="primary" size="small" onClick={this.onClickRedirect}>
                        Cookie Info
                    </Button>
                </div>
            );
            notification.open({
                message: 'Cookies 🍪',
                description:
                    trans("general.cookie_message"),
                btn,
                key,
                duration:0,
            });


    }

    render() {
        return null;
    }
}

export default withRouter(CookieMessage);
