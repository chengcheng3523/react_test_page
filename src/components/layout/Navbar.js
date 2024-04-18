import React, { useState } from 'react';
import { FileOutlined} from '@ant-design/icons';
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
  defaultSelectedKeys={['1']}

>
  <Menu.Item key="1" icon={<FileOutlined />}>
   <Link to="/InfoPage">表1-1.基本資料</Link>
  </Menu.Item>
  <Menu.Item key="2" icon={<FileOutlined />}>
    <Link to="/PlanPage">表1-2.生產計畫</Link>
  </Menu.Item>
  <Menu.Item key="3" icon={<FileOutlined />}>
  <Link to="/SeedPage">表2.種子(苗)登記表</Link>
  </Menu.Item>
  <Menu.Item key="4" icon={<FileOutlined />}>
  <Link to="/WorkPage">表3.栽培工作紀錄</Link>
  </Menu.Item>
  <Menu.Item key="5" icon={<FileOutlined />}>
  <Link to="/SolutionPage ">表4.養液配製紀錄</Link>
  </Menu.Item>
  <Menu.Item key="6" icon={<FileOutlined />}>
  <Link to="/MapPage ">表5.養液配製資材與代碼對照表</Link>
  </Menu.Item>
  <Menu.Item key="7" icon={<FileOutlined />}>
  <Link to="/FertPage ">表6.肥料施用紀錄</Link>
  </Menu.Item>
  <Menu.Item key="8" icon={<FileOutlined />}>
  <Link to="/PesticidePage">表7.肥料資材與代碼對照表</Link>
  </Menu.Item>
  <Menu.Item key="9" icon={<FileOutlined />}>
  <Link to="/OtherPage">表8.肥料入出庫紀錄</Link>
  </Menu.Item>
  <Menu.Item key="10" icon={<FileOutlined />}>
  <Link to="/FacilityPage">表9.有害生物防治或環境消毒資材施用紀錄</Link>
  </Menu.Item>
  <Menu.Item key="11" icon={<FileOutlined />}>
  <Link to="/EquipPage">表10.防治資材與代碼對照表</Link>
  </Menu.Item>
  <Menu.Item key="12" icon={<FileOutlined />}>
  <Link to="/HarvestPage">表11.有害生物防治或環境消毒資材入出庫紀錄</Link>
  </Menu.Item>
  <Menu.Item key="13" icon={<FileOutlined />}>
  <Link to="/DryPage">表12.其他資材使用紀錄</Link>
  </Menu.Item>
  <Menu.Item key="14" icon={<FileOutlined />}>
  <Link to="/PackPage">表13.其他資材與代碼對照表</Link>
  </Menu.Item>
  <Menu.Item key="15" icon={<FileOutlined />}>
  <Link to="/HealthPage14">表14.其他資材入出庫紀錄</Link>
  </Menu.Item>
  <Menu.Item key="16" icon={<FileOutlined />}>
  <Link to="/TracePage">表15.場地設施之保養、維修及清潔管理紀錄</Link>
  </Menu.Item>
  <Menu.Item key="17" icon={<FileOutlined />}>
  <Link to="/FeedPage">表16.器具/機械/設備之保養、維修、校正及清潔管理紀錄</Link>
  </Menu.Item>
  <Menu.Item key="18" icon={<FileOutlined />}>
  <Link to="RecallPage">表17.採收及採後處理紀錄</Link>
  </Menu.Item>
  <Menu.Item key="19" icon={<FileOutlined />}>
  <Link to="/PurchasePage">表18.乾燥作業紀錄</Link>
  </Menu.Item>
  <Menu.Item key="20" icon={<FileOutlined />}>
  <Link to="/InspectPage">表19.包裝及出貨紀錄</Link>
  </Menu.Item>
  <Menu.Item key="21" icon={<FileOutlined />}>
  <Link to="/HealthPage20">表20.作業人員衛生及健康狀態檢查紀錄</Link>
  </Menu.Item>
  <Menu.Item key="22" icon={<FileOutlined />}>
  <Link to="/ContractPage">表21.產銷履歷農產品委外合作契約書(例)</Link>
  </Menu.Item>
  <Menu.Item key="23" icon={<FileOutlined />}>
  <Link to="/FeedbackPage">表22..客戶抱怨/回饋紀錄</Link>
  </Menu.Item>
  <Menu.Item key="24" icon={<FileOutlined />}>
  <Link to="/RecyclingPage">表23.產品回收處理紀錄</Link>
  </Menu.Item>
  <Menu.Item key="25" icon={<FileOutlined />}>
  <Link to="/PurchasePage24">表24.資材採購單據黏貼處</Link>
  </Menu.Item>
  <Menu.Item key="26" icon={<FileOutlined />}>
  <Link to="/AnalysisPage">表25.各種檢驗分析表黏貼處</Link>
  </Menu.Item>


</Menu>

  );
}

export default Navbar;
