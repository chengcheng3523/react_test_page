import React, { useState } from 'react';
import { FileOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
//menu
//Sider

const { Content, Sider } = Layout;
const items = [FileOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `表單 ${index + 1}`,

  }),
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}>

      <Menu.Item key="1" icon={<FileOutlined />}>
        <Link to="/Page01">表1-1.基本資料</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<FileOutlined />}>
        <Link to="/Page02">表1-2.生產計畫</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<FileOutlined />}>
        <Link to="/Page002">表2.種子(苗)登記表</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<FileOutlined />}>
        <Link to="/Page003">表3.栽培工作紀錄</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<FileOutlined />}>
        <Link to="/Page004 ">表4.養液配製紀錄</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<FileOutlined />}>
        <Link to="/Page005 ">表5.養液配製資材與代碼對照表</Link>
      </Menu.Item>
      <Menu.Item key="7" icon={<FileOutlined />}>
        <Link to="/Page006 ">表6.肥料施用紀錄</Link>
      </Menu.Item>
      <Menu.Item key="8" icon={<FileOutlined />}>
        <Link to="/Page007">表7.肥料資材與代碼對照表</Link>
      </Menu.Item>
      <Menu.Item key="9" icon={<FileOutlined />}>
        <Link to="/Page008">表8.肥料入出庫紀錄</Link>
      </Menu.Item>
      <Menu.Item key="10" icon={<FileOutlined />}>
        <Link to="/Page009">表9.有害生物防治或環境消毒資材施用紀錄</Link>
      </Menu.Item>
      <Menu.Item key="11" icon={<FileOutlined />}>
        <Link to="/Page010">表10.防治資材與代碼對照表</Link>
      </Menu.Item>
      <Menu.Item key="12" icon={<FileOutlined />}>
        <Link to="/Page011">表11.有害生物防治或環境消毒資材入出庫紀錄</Link>
      </Menu.Item>
      <Menu.Item key="13" icon={<FileOutlined />}>
        <Link to="/Page012">表12.其他資材使用紀錄</Link>
      </Menu.Item>
      <Menu.Item key="14" icon={<FileOutlined />}>
        <Link to="/Page013">表13.其他資材與代碼對照表</Link>
      </Menu.Item>
      <Menu.Item key="15" icon={<FileOutlined />}>
        <Link to="/Page014">表14.其他資材入出庫紀錄</Link>
      </Menu.Item>
      <Menu.Item key="16" icon={<FileOutlined />}>
        <Link to="/Page015">表15.場地設施之保養、維修及清潔管理紀錄</Link>
      </Menu.Item>
      <Menu.Item key="17" icon={<FileOutlined />}>
        <Link to="/Page016">表16.器具/機械/設備之保養、維修、校正及清潔管理紀錄</Link>
      </Menu.Item>
      <Menu.Item key="18" icon={<FileOutlined />}>
        <Link to="/Page017">表17.採收及採後處理紀錄</Link>
      </Menu.Item>
      <Menu.Item key="19" icon={<FileOutlined />}>
        <Link to="/Page018">表18.乾燥作業紀錄</Link>
      </Menu.Item>
      <Menu.Item key="20" icon={<FileOutlined />}>
        <Link to="/Page019">表19.包裝及出貨紀錄</Link>
      </Menu.Item>

    </Menu>

  );
}

export default Navbar;
