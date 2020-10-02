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
                    rules={[{ required: true, message: trans("crud.missing_amount") }]}
                  >
                    <Input placeholder="Anzahl" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "unit"]}
                    fieldKey={[field.fieldKey, "unit"]}
                    rules={[{ required: true, message: trans("crud.missing_unit") }]}
                  >
                    <Input placeholder="Einheit"/>
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "ingredient"]}
                    fieldKey={[field.fieldKey, "ingredient"]}
                    rules={[{ required: true, message: trans("crud.missing_ingredient") }]}
                  >
                    <Input placeholder={trans("crud.ingredient")}/>
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
                  <PlusOutlined /> {trans("crud.add_ingredient")}
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
