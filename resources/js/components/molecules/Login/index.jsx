import React from "react";
import {
  Card, Form, Input, Button, Checkbox, Tabs
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

import Cookies from "js-cookie";
import { axios } from "../../atoms";

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
                  message: trans("auth.err_missing_email")
                }
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

export default Login;
