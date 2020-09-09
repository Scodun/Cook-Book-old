import React from "react";
import { Space, Form, Input, Button, Steps } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Step } = Steps;

class StepInputList extends React.Component {
    state = {
      current: 0,
      fields: 0
    };

    onChange = current => {
      this.setState({ current });
    };

addFields = () => {
  const rows = [];
  for (let i = 0; i < this.state.fields; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Step key={i} />);
  }
  return rows;
}

render () {
  return (
    <div className="form-steps-wrapper">
      <div>
        <Steps current={this.state.current} onChange={this.onChange} direction="vertical">
          {this.addFields()}
        </Steps>
        <Form.Item>
          <Button
            type="dashed"
            onClick={() => {
              this.add();
              this.setState({ fields: this.state.fields + 1 });
            }}
          >
            <PlusOutlined /> Add Step
          </Button>
        </Form.Item>
      </div>
      <Form.List name={["recipe", "steps"]}>
        {(fields, { add, remove }) => {
          this.add = add;
          return (
            <div className="form-steps-inputs">
              {fields.map(field => (
                <Space key={field.key} size="0" style={{ marginBottom: "-20px", width: "200rem", flexDirection: "column", display: this.state.current === field.key ? "flex" : "none" }} align="start">
                  <Form.Item
                    {...field}
                    name={[field.name, "title"]}
                    fieldKey={[field.fieldKey, "title"]}
                    style={{ width: "40rem" }}
                    label="Schritt Titel"
                  >
                    <Input placeholder="Title" style={{ width: "40rem" }}/>
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "text"]}
                    fieldKey={[field.fieldKey, "text"]}
                    className="stepInput"
                    label="Schritt Beschreibung"
                  >
                    <Input.TextArea className="stepInput" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
              ))}
            </div>
          );
        }}
      </Form.List>
    </div>
  );
}
}
export default StepInputList;
