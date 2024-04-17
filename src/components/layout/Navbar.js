import React, { useState } from 'react';

//menu
//Sider

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="vertical-navbar">
      <div className="vertical-navbar-container">
        
          <h1>菜单 </h1>
        
        <div className={`vertical-navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
          <li><a href="/InfoPage">表1-1.基本資料</a></li>
        <li><a href="/PlanPage">表1-2.生產計畫</a></li>
        <li><a href="/SeedPage">表2.種子(苗)登記表</a></li>
        <li><a href="/WorkPage">表3.栽培工作紀錄</a></li>
        <li><a href="/SolutionPage">表4.養液配製紀錄</a></li>
        <li><a href="/MapPage">表5.養液配製資材與代碼對照表</a></li>
        <li><a href="/FertPage">表6.肥料施用紀錄</a></li>
        <li><a href="/PesticidePage">表7.肥料資材與代碼對照表</a></li>
        <li><a href="/OtherPage">表8.肥料入出庫紀錄</a></li>
        <li><a href="/FacilityPage">表9.有害生物防治或環境消毒資材施用紀錄</a></li>
        <li><a href="/EquipPage">表10.防治資材與代碼對照表</a></li>
        <li><a href="/HarvestPage">表11.有害生物防治或環境消毒資材入出庫紀錄</a></li>
        <li><a href="/DryPage">表12.其他資材使用紀錄</a></li>
        <li><a href="/PackPage">表13.其他資材與代碼對照表</a></li>
        <li><a href="/HealthPage14">表14.其他資材入出庫紀錄</a></li>
        <li><a href="/TracePage">表15.場地設施之保養、維修及清潔管理紀錄</a></li>
        <li><a href="/FeedPage">表16.器具/機械/設備之保養、維修、校正及清潔管理紀錄</a></li>
        <li><a href="/RecallPage">表17.採收及採後處理紀錄</a></li>
        <li><a href="/PurchasePage">表18.乾燥作業紀錄</a></li>
        <li><a href="/InspectPage">表19.包裝及出貨紀錄</a></li>
        <li><a href="/HealthPage20">表20.作業人員衛生及健康狀態檢查紀錄</a></li>
        <li><a href="/ContractPage">表21.產銷履歷農產品委外合作契約書(例)</a></li>
        <li><a href="/FeedbackPage">表22.客戶抱怨/回饋紀錄</a></li>
        <li><a href="/RecyclingPage">表23.產品回收處理紀錄</a></li>
        <li><a href="/PurchasePage24">表24.資材採購單據黏貼處</a></li>
        <li><a href="/AnalysisPage">表25.各種檢驗分析表黏貼處</a></li>
          </ul>
        </div>
        <div className="vertical-navbar-toggle" onClick={toggleMenu}>
          <div className={`burger ${isOpen ? 'open' : ''}`}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
