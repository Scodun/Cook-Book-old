import React from "react";
import {
  Card, Form, Input, Button, Checkbox, Tabs
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

import Cookies from "js-cookie";
import {axios} from "../../atoms";

const { TabPane } = Tabs;

function Login () {
  const history = useHistory();
  const onLoginFinish = function (values) {
    // eslint-disable-next-line no-undef
      axios.post("/api/auth/login", values, { headers: { "X-CSRF-TOKEN": csrf_token, "Content-Type": "application/json" } }).then(res => {
      const expires = (res.data.expires_at || 60 * 60) * 1000;
      const inOneHour = new Date(new Date().getTime() + expires);
      Cookies.set("access_token", res.data.access_token, { expires: inOneHour });

      history.push("/home");
    });
  };

  const onRegFinish = function (values) {
    // eslint-disable-next-line no-undef
      axios.post("/api/auth/register", values, { headers: { "X-CSRF-TOKEN": csrf_token } }).then(res => {

    });
  };

  return (
    <Card>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Login" key="1">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true
            }}
            onFinish={onLoginFinish.bind(this)}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!"
                }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/PasswordReset">Forgot Password</Link>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Register" key="2">
          <Form
            name="normal_login"
            className="register-form"
            initialValues={{
              remember: true
            }}
            onFinish={onRegFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!"
                }
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!"
                }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                ({ getFieldValue }) => ({
                  validator (rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(Error("The two passwords that you entered do not match!"));
                  }
                })
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                { validator: (_, value) => (value ? Promise.resolve() : Promise.reject(Error("Should accept agreement"))) }
              ]}
            >
              <Checkbox>
                  I have read and accept the
                {" "}
                <Link to="/Legal">Terms and Conditions</Link>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                  Register
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Card>
  );
}

export default Login;
