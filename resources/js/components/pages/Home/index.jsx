import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";
const { Meta } = Card;

@inject("authStore")
@observer
class Home extends Component {
  async componentDidMount () {
    await this.props.authStore.fetchCurrentUser();
  }

    handleAddRecipeClick = e => {
      this.props.history.push("/recipes/add");
    };

    render () {
      const { user } = this.props.authStore;
      return (
        <div className="home">
          <section className="mainContainer">
            <div className="welcome">
              <h1>{trans("welcome.welcome") + " " + user?.username}!</h1>
              <div className="tip-container">
                <Card style={{ width: "20rem", margin: "1rem" }}
                  actions={[
                    <ArrowRightOutlined key="createRecipe" onClick={this.handleAddRecipeClick}/>
                  ]}>
                  <Meta
                    title={trans("crud.add_recipe")}
                    description={trans("crud.add_recipe_desc")}
                  />
                </Card>
                <Card style={{ width: "20rem", margin: "1rem" }}
                  actions={[
                    <ArrowRightOutlined key="find" />
                  ]}>
                  <Meta
                    title={trans("crud.find_friends")}
                    description={trans("crud.find_friends_desc")}
                  />
                </Card>
              </div>
            </div>
          </section>
          <section className="recipesContainer">
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://d1uz88p17r663j.cloudfront.net/resized/2020_02_17T16_29_16_sites_default_files_recipes_en_1480976541_944_531.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="go" />
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Fischsuppe"
                description="Hier entscteht eine wundervolle fischsuppe.."
              />
            </Card>,
          </section>
        </div>
      );
    }
}
export default Home;
