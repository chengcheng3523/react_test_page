import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  ProfileOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick}  mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">首頁</Link>
      </Item>

      <Item key="PostPage" icon={<ProfileOutlined />} className="float-right">
        <Link to="/PostPage">新增資料</Link>
      </Item>
      <Item key="GetPage" icon={<ProfileOutlined />} className="float-right">
        <Link to="/GetPage">查詢資料</Link>
      </Item>
      <Item key="PutPage" icon={<ProfileOutlined />} className="float-right">
        <Link to="/PutPage">修改資料</Link>
      </Item>
      <Item key="DeletePage" icon={<ProfileOutlined />} className="float-right">
        <Link to="/DeletePage">刪除資料</Link>
      </Item>
      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">登入</Link>
      </Item>
    </Menu>

  );
};
export default Header;
