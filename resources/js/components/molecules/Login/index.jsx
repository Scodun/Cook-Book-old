import React from "react";
import {
  Card, Form, Input, Button, Checkbox, Tabs, notification
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link,withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";


const { TabPane } = Tabs;

@inject("authStore")
@observer
class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: "1"
    };
    this.changeTab = this.changeTab.bind(this);
    this.onRegFinish = this.onRegFinish.bind(this);
    this.onLoginFinish = this.onLoginFinish.bind(this);
  }

  async onLoginFinish (values) {
    try {
      await this.props.authStore.login(values);
      this.props.history.push("/home");
    } catch (e) {
      notification.error({
        message: trans("auth.err_login")
      });
    }
  };

  setStateAsync (state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async onRegFinish (values) {
    try {
      await this.props.authStore.register(values);
      await this.setStateAsync({ selectedTab: "1" });
      notification.success({
        message: trans("auth.suc_register")
      });
    } catch (error) {
      notification.error({
        message: error.message
      });
    }
  };

  changeTab (activeKey) {
    this.setState({ selectedTab: activeKey });
  };

  render () {
    return (
      <Card>
        <Tabs defaultActiveKey="1" activeKey={this.state.selectedTab} onChange={this.changeTab}>
          <TabPane tab="Login" key="1">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true
              }}
              onFinish={this.onLoginFinish.bind(this)}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: trans("auth.err_missing_username")
                  }
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={trans("auth.username")} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: trans("auth.err_missing_password")
                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={trans("auth.password")}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>{trans("auth.remember_me")}</Checkbox>
                </Form.Item>
                <Link to="/PasswordReset">{trans("auth.forgot_password")}</Link>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  {trans("auth.login")}
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Register" key="2">
            <Form
              id="register-form"
              name="normal_login"
              className="register-form"
              initialValues={{
                remember: true
              }}
              onFinish={this.onRegFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: trans("auth.err_missing_email")
                  },
                  { type: "email" }
                ]}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder={trans("auth.email")} />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: trans("auth.err_missing_username")
                  }
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={trans("auth.username")} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: trans("auth.err_missing_password")
                  },
                  {
                    min: 8,
                    message: trans("auth.err_pass_length")
                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={trans("auth.password")}
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: trans("auth.err_confirm_password")
                  },
                  ({ getFieldValue }) => ({
                    validator (rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(Error(trans("auth.err_match_password_confirm")));
                    }
                  })
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={trans("auth.confirm_password")}
                />
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  { validator: (_, value) => (value ? Promise.resolve() : Promise.reject(Error(trans("auth.err_agree")))) }
                ]}
              >
                <Checkbox>
                  {trans("auth.accept_agreement_start") + " "}
                  <Link to="/Legal">{trans("auth.terms_conditions")}</Link>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  {trans("auth.register")}
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default withRouter(Login);
