import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space ,InputNumber} from 'antd';


const HealthPage14	=() => {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        // 在這裡處理表單提交後的操作，比如儲存數據等
      };
      const handleChange = (value) => {
        console.log(`selected ${value}`);
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
  const [verificationStatus, setVerificationStatus] = useState(8); // 驗證狀態的值
  
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
            <h1>
                表14.其他資材入出庫紀錄
            </h1>
            </div>           
            {cards.map((card, index) => (
        <Card
          key={index}
          title="其他資材入出庫紀錄"
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
            <Form.Item label="資材名稱:"><Input /></Form.Item>
            <Form.Item label="廠商:"><Input /></Form.Item>
            <Form.Item label="供應商:"><Input /></Form.Item>
            

          
            <Form.Item label="包裝單位:" name="Seed Sourc">          
              <Radio.Group onChange={handleSalesTargetChange} value={salesTarget}>
                <Space direction="vertical">
                  <Radio value={1}>包</Radio>
                  <Radio value={2}>瓶</Radio>
                  <Radio value={3}>罐</Radio>             
                  <Radio value={4}>其他              
                      <Input placeholder="請填寫其他包裝單位:" style={{ width: 200, marginLeft: 10 }} />
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="包裝容量:" name="Seedling Purchase Type">
                <InputNumber />  
              <Select>
                <Select.Option value="公克">公克</Select.Option>
                <Select.Option value="公斤">公斤</Select.Option>
                <Select.Option value="毫升">毫升</Select.Option>
                <Select.Option value="公升">公升</Select.Option>
                <Select.Option value="其他">其他</Select.Option> 
              </Select><Input placeholder="請填寫其他包裝容量:"style={{ width: 200, marginLeft: 10 }}/>
            </Form.Item>
         

            <Form.Item label="日期:" name="harvestDate"><DatePicker /></Form.Item>
            <Form.Item label="購入量:"><InputNumber /></Form.Item>
            <Form.Item label="購入量:"><InputNumber /></Form.Item>
            <Form.Item label="使用量:"><InputNumber /></Form.Item>
            <Form.Item label="剩餘量:"><InputNumber /></Form.Item>
            
            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
        </Card>     
         ))}
            <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default HealthPage14;