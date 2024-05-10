import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space ,InputNumber} from 'antd';


const RecallPage=() => {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        // 在這裡處理表單提交後的操作，比如儲存數據等
      };
      
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [size] = useState('large'); // default is 'middle'

  const [cards, setCards] = useState([{}]); // 初始状态为一个空的卡片

  function handleClick() {
    const newCard = {}; // 创建一个新的空卡片
    setCards([...cards, newCard]); // 将新卡片添加到卡片数组中
  }

  const [salesTarget, setSalesTarget] = useState(1); // 銷售對象的值
  const [verificationStatus, setVerificationStatus] = useState(9); // 驗證狀態的值
  
  const handleSalesTargetChange = (value) => {
    setSalesTarget(value);
  };
  
  const handleVerificationStatusChange = (value) => {
    setVerificationStatus(value);
  };
  

  


    return (
        <Loginlayout fixedHeader>           
            <ClearFix height="100px"/>             
            <div>
            <h1>表17.採收及採後處理紀錄</h1>
            </div>           
            {cards.map((card, index) => (
        <Card
          key={index}
          title="採收及採後處理紀錄"
          extra={<Button onClick={handleClick}>More</Button>}>

          <Form
            labelCol={{ span:10 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行
            >

           

            <Form.Item label="採收日期:" name="harvestDate"><DatePicker /></Form.Item>
            <Form.Item label="田區代號:"><Input /></Form.Item>
            <Form.Item label="作物名稱:"><Input /></Form.Item>
            <Form.Item label="批次編號或履歷編號:"><Input /></Form.Item>
            <Form.Item label="採收重量(處理前)(公斤):"><InputNumber />單位：公斤</Form.Item>
            <Form.Item label="處理日期:" name="processingDate"><DatePicker /></Form.Item>


            <Form.Item label="採後處理內容:" name="Seed Source">          
              <Radio.Group onChange={handleSalesTargetChange} value={salesTarget}>
                <Space direction="vertical">
                  <Radio value={1}>清洗</Radio>
                  <Radio value={2}>整修</Radio>
                  <Radio value={3}>去雜</Radio>
                  <Radio value={4}>分級</Radio>
                  <Radio value={5}>預冷</Radio>
                  <Radio value={6}>冷藏</Radio>
                  <Radio value={7}>去殼/去莢</Radio>                                 
                  <Radio value={8}>其他              
                      <Input placeholder="請填寫其他採後處理內容:" style={{ width: 300, marginLeft: 10 }} />
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="處理後重量(公斤):"><InputNumber />單位：公斤</Form.Item>

            <Form.Item label="驗證狀態:" name="驗證">          
              <Radio.Group onChange={handleVerificationStatusChange} value={verificationStatus}>
                <Space direction="vertical">
                  <Radio value={9}>非驗證產品</Radio>
                  <Radio value={10}>驗證產品，驗證機構：
                  <Input placeholder="請填寫驗證機構:" style={{ width: 200, marginLeft: 10 }} />
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
        </Card>     
         ))}
            <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default RecallPage;
