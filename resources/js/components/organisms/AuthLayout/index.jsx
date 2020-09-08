import { Layout, Menu } from "antd";
import { ReadOutlined, UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import React from "react";
import { CustomFooter } from "../../molecules";
import Cookies from "js-cookie";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AuthLayout extends React.Component {
    handleClick = e => {
      switch (e.key) {
        case "logout":
          Cookies.remove("access_token");
          this.props.history.push("/");
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
      }
    };

    render () {
      return (
        <Layout style={{ height: "100vh" }}>
          <Header className="header">
            <div className="logo" >
          Cook Book
            </div>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                onClick={this.handleClick}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Profil">
                  <Menu.Item key="1">Meine Freunde</Menu.Item>
                  <Menu.Item key="2">Einstellungen</Menu.Item>
                  <Menu.Item key="logout">Logout</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<ReadOutlined />} title="Rezepte">
                  <Menu.Item key="4">Meine Rezepte</Menu.Item>
                  <Menu.Item key="5">Alle Rezepte</Menu.Item>
                  <Menu.Item key="6">Zufallsrezept</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  height: "100%"
                }}
              >
                {this.props.children}
              </Content>
              <CustomFooter/>
            </Layout>
          </Layout>
        </Layout>
      );
    }
}
export default withRouter(AuthLayout);
