import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space ,InputNumber} from 'antd';


const FeedPage=() => {
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
  const [verificationStatus, setVerificationStatus] = useState(10); // 驗證狀態的值
  
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
            <h1>表16.器具/機械/設備之保養、維修、校正及清潔管理紀錄</h1>
            </div>           
            {cards.map((card, index) => (
        <Card
          key={index}
          title="器具/機械/設備之保養、維修、校正及清潔管理紀錄"
          extra={<Button onClick={handleClick}>More</Button>}>

          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行
            >

            <Form.Item label="日期:" name="Date">
              <DatePicker />
            </Form.Item>


            <Form.Item label="項目:" name="Seed Source">          
              <Radio.Group onChange={handleSalesTargetChange} value={salesTarget}>
                <Space direction="vertical">
                  <Radio value={1}>噴霧機</Radio>
                  <Radio value={2}>割草機</Radio>
                  <Radio value={3}>中耕機</Radio>
                  <Radio value={4}>選別機</Radio>
                  <Radio value={5}>貯藏/溫控設備</Radio>
                  <Radio value={6}>搬運車</Radio>
                  <Radio value={7}>冷藏車</Radio>
                  <Radio value={8}>貨車</Radio>                    
                  <Radio value={9}>其他              
                      <Input placeholder="請填寫其他項目:" style={{ width: 200, marginLeft: 10 }} />
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="作業內容:" name="作業內容">          
              <Radio.Group onChange={handleVerificationStatusChange} value={verificationStatus}>
                <Space direction="vertical">
                  <Radio value={10}>清潔</Radio>
                  <Radio value={11}>保養</Radio>
                  <Radio value={12}>維修</Radio>
                  <Radio value={13}>校正</Radio>
                  <Radio value={14}>
                  其他
                    
                      <Input placeholder="請填寫其他作業內容:" style={{ width: 200, marginLeft: 10 }} />
                    
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="記錄人:" name="Crop Variety"><Input /></Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
        </Card>     
         ))}
            <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default FeedPage;
