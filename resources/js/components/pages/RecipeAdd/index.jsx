import React, { Component } from "react";
import { getUser } from "../../atoms/AuthenticatedRoute";
import { Form, Input, Button, Rate, Card } from "antd";
import { PictureWall, axios } from "../../atoms";
import { IngredientInputList, StepInputList } from "../../molecules";

export default class RecipeAdd extends Component {
    constructor(props) {
        super(props);
        this.Pictures = React.createRef();
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        getUser().then(user => this.setState({ user: user.data }));
    }

    onFinish = async values => {
        const currentPictures = this.Pictures.current;
        await this.props.recipeStore.addRecipe(values.recipe);
    };

    render() {
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
                                <Form.Item
                                    name={["recipe", "name"]}
                                    label={trans("crud.recipe_name")}
                                >
                                    <Input
                                        placeholder={trans(
                                            "crud.err_recipe_name"
                                        )}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name={["recipe", "description"]}
                                    label={trans("crud.description")}
                                >
                                    <Input.TextArea />
                                </Form.Item>
                                <div className="ingredient-list">
                                    <label>{trans("crud.ingredients")}</label>
                                    <IngredientInputList />
                                </div>
                            </section>
                            <section className="form-right">
                                <label>{trans("crud.recipe_images")}</label>
                                <PictureWall ref={this.Pictures}></PictureWall>
                                <Card
                                    title={trans("crud.difficulty")}
                                    style={{ width: "20rem" }}
                                >
                                    <Form.Item name={["recipe", "difficulty"]}>
                                        <Rate />
                                    </Form.Item>
                                </Card>
                            </section>
                        </div>

                        <section>
                            <StepInputList />
                        </section>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {trans("crud.save")}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
