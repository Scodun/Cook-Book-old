import React, { Component } from "react";
import { Card } from "antd";
import { EditOutlined, ShareAltOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";
const { Meta } = Card;

@inject("recipeStore")
@observer
class RecipeView extends Component {
  async componentDidMount () {
    await this.props.recipeStore.fetchMyRecipes();
  }

  render () {
    const { recipes } = this.props.recipeStore;
    return (
      <div className="">
        <h1>{trans("crud.recipes")}</h1>
        {recipes.map((recipe, i) => {
          // Return the element. Also pass key
          return (
            <Card
              style={{ width: 300 }}
              key={i}
              cover={
                <img
                  alt="example"
                  src="https://d1uz88p17r663j.cloudfront.net/resized/2020_02_17T16_29_16_sites_default_files_recipes_en_1480976541_944_531.jpg"
                />
              }
              actions={[
                <EditOutlined key="edit" />,
                <ShareAltOutlined key="share" />
              ]}
            >
              <Meta
                title={recipe.name}
                description={recipe.description}
              />
            </Card>
          );
        })}
      </div>
    );
  }
}
export default RecipeView;
