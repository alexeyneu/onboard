import React from "react";
import { Button } from "antd";
import { Alert, Form, Input } from "antd";
import { login } from "../actions";
import { LoginOutlined } from "@ant-design/icons";

// sensible defaults
const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 58846;
const DEFAULT_USERNAME = "localclient";

function LoginForm() {
  const [form] = Form.useForm();
  const initialValues = {};
  const dispatch = {};
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      form={form}
      name="login"
      initialValues={initialValues}
    >

      {/* Host:port */}
      <Form.Item name="host" label="Host" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_HOST} />
      </Form.Item>
      <Form.Item name="port" label="Port" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_PORT} />
      </Form.Item>
      {/* User:password */}
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input placeholder={DEFAULT_USERNAME} />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      {/* Submit */}
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          <LoginOutlined />
          Connect
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
