import React, { Component } from "react";
import { getUser } from "../../atoms/AuthenticatedRoute";
import { Form, Input, Button, Rate, Card } from "antd";
import { PictureWall } from "../../atoms";
import { IngredientInputList, StepInputList } from "../../molecules";

class RecipeAdd extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount () {
    getUser()
      .then(user => this.setState({ user: user.data }));
  }

    onFinish = values => {
      console.log("Received values of form: ", values);
    };

    render () {
      return (
        <div className="recipeAdd">
          <Form
            name="recipe"
            onFinish={this.onFinish}
            initialValues={{
              rate: 3.5
            }}
            layout="vertical"
            size="middle"
          >
            <div className="form-ingredients-wrapper">
              <div className="form-ingredients-top-wrapper">
                <section className="form-left">
                  <Form.Item name={["recipe", "name"]} label="Rezept Name">
                    <Input placeholder="Bitte geben Sie den Namen des Rezeptes ein" />
                  </Form.Item>
                  <Form.Item name={["recipe", "description"]} label="Beschreibung">
                    <Input.TextArea />
                  </Form.Item>
                  <div className="ingredient-list">
                    <label>Zutaten</label>
                    <IngredientInputList/>
                  </div>
                </section>
                <section className="form-right">
                  <Card title="Schwierigkeit" >
                    <Rate/>
                  </Card>
                  <label>Rezept Bilder</label>
                  <PictureWall></PictureWall>
                </section>
              </div>

              <section>
                <StepInputList/>
              </section>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                      Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
}
export default RecipeAdd;
