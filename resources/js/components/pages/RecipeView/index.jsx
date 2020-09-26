import React, { Component } from "react";
import { Card } from "antd";
import { axios } from "../../atoms";
import { EditOutlined, ShareAltOutlined } from "@ant-design/icons";
const { Meta } = Card;

class RecipeView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount () {
    axios.get("/api/recipes/getForUser")
      .then(recipes => this.setState({ recipes: recipes.data }));
  }

  render () {
    return (
      <div className="">
        <h1>Rezepte</h1>
        {this.state.recipes.map((recipe, i) => {
          console.log("Entered");
          // Return the element. Also pass key
          return (<Card
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
          </Card>);
        })}
      </div>
    );
  }
}
export default RecipeView;
