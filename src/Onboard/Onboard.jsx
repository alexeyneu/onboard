import React from "react";
import { Card, Layout, PageHeader } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import BoardForm from "./BoardForm";

const { Content } = Layout;

function Onboard() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content style={{ padding: "0 50px" }}>
        <PageHeader
          title="Contract administration"
          avatar={{ icon: <CloudUploadOutlined /> }}
        />
        <Card title="add new token or project " id="onboard-card">
          <BoardForm />
        </Card>
      </Content>
    </Layout>
  );
}

export default Onboard;
