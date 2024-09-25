import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page02 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/bd/post', values);
      console.log('成功發送請求，回應:', response.data);
      form.resetFields(); // 清空輸入框
    } catch (error) {
      console.error('發送請求失敗:', error);
    }
  };
  const [form] = Form.useForm(); // 使用 Form.useForm 鉤子
  const [value, setValue] = useState(''); // 定義 value 狀態
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />

      <div>
        <h1>表1-2.生產計畫</h1>
     
     
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
            <Form.Item label="年度生產計畫:"  name="">
             <Input style={{width: '100px'}}  />
            </Form.Item>
            <Form.Item label="場區代號:"  name="AreaCode">
            <Input />
            </Form.Item>
            <Form.Item label="場區面積(公頃) :"  name="AreaSize">
            <Input />
            </Form.Item>
            <Form.Item label="種植作物種類:" name="CropTypeHarvestPeriodEstimatedYield">
              <Input />
            </Form.Item>
            <Form.Item label="種植作物產期:" name="CropTypeHarvestPeriodEstimatedYield">
              <Input />
            </Form.Item>
            <Form.Item label="種植作物預估產量(公斤):" name="CropTypeHarvestPeriodEstimatedYield">
              <Input />
            </Form.Item>
            <Form.Item label="備註:" name="Notes">
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page02;
