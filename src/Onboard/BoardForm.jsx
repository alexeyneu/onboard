import React from "react";
import { Button } from "antd";
import { Alert, Form, Input } from "antd";
import { login } from "../actions";
import { LoginOutlined } from "@ant-design/icons";

// sensible defaults
const DEFAULT_TOKEN = "0x570215116714E113592ac8ef87C6ABfd176d705e";
const DEFAULT_REF = "0xe1CcF78C6E26c45c4e4A5584C19a2e5b2009536E";

function BoardForm() {
  const [form] = Form.useForm();
  const initialValues = {};
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      form={form}
      name="onboard"
      initialValues={initialValues}
    >

      {/* token and ref */}
      <Form.Item name="token" label="Token" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_TOKEN} />
      </Form.Item>
      <Form.Item name="reff" label="Ref" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_REF} />
      </Form.Item>
      {/* Submit */}
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          <LoginOutlined />
          Submit and sign
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BoardForm;
