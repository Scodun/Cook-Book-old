import { Layout, Menu } from "antd";
import { ReadOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import React from "react";
import { CustomFooter } from "../../molecules";
import Cookies from "js-cookie";
import axios from "axios";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AuthLayout extends React.Component {
    state = {
      collapsed: false
    };

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    handleClick = e => {
      switch (e.key) {
        case "logout":
          Cookies.remove("access_token");
          axios.defaults.headers.common.Authorization = null;
          this.props.history.push("/");
          break;
        case "/home":
          this.props.history.push("/home");
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
            <div className="head-items">
              <div className="collapse-icon">
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: "trigger",
                  onClick: this.toggle
                })}
              </div>
              <div className="logo" >
                      Cook Book
              </div>
            </div>
          </Header>
          <Layout>
            <Sider width={200} trigger={null} collapsible collapsed={this.state.collapsed} breakpoint="lg" collapsedWidth="0" className="site-layout-background">
              <Menu
                mode="inline"
                onClick={this.handleClick}
                selectedKeys={[this.props.location.pathname]}
                defaultOpenKeys={["recipes"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item key="/home" icon={<HomeOutlined />} title="Home">Home</Menu.Item>
                <SubMenu key="recipes" icon={<ReadOutlined />} title="Rezepte">
                  <Menu.Item key="/recipes/add">Meine Rezepte</Menu.Item>
                  <Menu.Item key="5">Alle Rezepte</Menu.Item>
                  <Menu.Item key="6">Zufallsrezept</Menu.Item>
                </SubMenu>
                <SubMenu key="profile" icon={<UserOutlined />} title="Profil">
                  <Menu.Item key="1">Meine Freunde</Menu.Item>
                  <Menu.Item key="2">Einstellungen</Menu.Item>
                  <Menu.Item key="logout">Logout</Menu.Item>
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
