import React from "react";
const { useState } = require("react");
const {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} = require("@ant-design/icons");
const { Layout, Menu, Button, theme } = require("antd");

const { Header, Sider, Content } = Layout;

const Sideantd = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: React.createElement(UserOutlined),
              label: "nav 1",
            },
            {
              key: "2",
              icon: React.createElement(VideoCameraOutlined),
              label: "nav 2",
            },
            {
              key: "3",
              icon: React.createElement(UploadOutlined),
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={
              collapsed
                ? React.createElement(MenuUnfoldOutlined)
                : React.createElement(MenuFoldOutlined)
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sideantd;
