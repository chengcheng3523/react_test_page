import React, { useState } from 'react'; // 確保有引入 useState
import { Layout, Menu, theme } from 'antd';
import Header from "./Header";
import Footer from "./footer"
import Navbar from "./Navbar"

const { Content, Sider } = Layout;


const Loginlayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false); // 定義 collapsed 狀態並初始化為 false
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider 
         
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        

      >
        <Navbar/>
        <div className="demo-logo-vertical" />
        
        <Menu theme="dark" mode="inline" />
        
      </Sider>
      <Layout>

      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            marginLeft: collapsed ? 80 : 200, // 當側邊欄摺疊時，給它一個適當的偏移量
            transition: 'margin-left 0.2s', // 添加過渡效果，使變化更平滑
          }}
          collapsed={collapsed} // 傳遞 collapsed 狀態給 Header
        />

        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           {children}
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
         
        </Footer>

      </Layout>
    </Layout>
  );
};
export default Loginlayout;