import React from "react";
import { Space, Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

class IngredientInputList extends React.Component {
  render () {
    return (
      <Form.List name={["recipe", "ingredients"]}>
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map(field => (
                <Space key={field.key} size="0" style={{ display: "flex", marginBottom: "-20px" }} align="start">
                  <Form.Item
                    {...field}
                    name={[field.name, "amount"]}
                    fieldKey={[field.fieldKey, "amount"]}
                    rules={[{ required: true, message: "Fehlende Anzahl" }]}
                  >
                    <Input placeholder="Anzahl" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "unit"]}
                    fieldKey={[field.fieldKey, "unit"]}
                    rules={[{ required: true, message: "Fehlende Einheit" }]}
                  >
                    <Input placeholder="Einheit"/>
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "ingredient"]}
                    fieldKey={[field.fieldKey, "ingredient"]}
                    rules={[{ required: true, message: "Fehlende Zutat" }]}
                  >
                    <Input placeholder="Zutat"/>
                  </Form.Item>

                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                >
                  <PlusOutlined /> Add Ingredient
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    );
  }
}
export default IngredientInputList;
