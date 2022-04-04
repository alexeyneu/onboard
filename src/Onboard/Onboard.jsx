import React from "react";
import { Card, Layout, PageHeader } from "antd";
import { DashboardTwoTone } from "@ant-design/icons";
import { useState } from 'react';
import BoardForm from "./BoardForm";
import BoardFm from "./BoardFm";

const { Content } = Layout;

function Onboard() {
  const [conngoes, setConngoes] = useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
      <Content style={{ padding: "0 50px" }}>
        <PageHeader
          title="Contract administration"
          avatar={{ icon: <DashboardTwoTone /> }}
        />
        <Card title="My Investment" id="onboard-card">
          <BoardForm conngoes={conngoes} setConngoes={setConngoes}/>
        </Card>
        <Card title="one more" id="onboard-fm">
          <BoardFm conngoes={conngoes}/>
        </Card>
      </Content>
    </Layout>
  );
}

export default Onboard;
