import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page01 = () => {

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
        <h1>表1-1.基本資料</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
            <Form.Item label="單位名稱:"  name="UN">
            <Input />
            </Form.Item>
            <Form.Item label="經營農戶姓名:"  name="FarmerName">
            <Input />
            </Form.Item>
            <Form.Item label="電話:()" name="ContactPhone">
              <Input />
            </Form.Item>
            <Form.Item label="傳真:()" name="Fax">
              <Input />
            </Form.Item>
            <Form.Item label="行動電話:" name="MobilePhone">
              <Input />
            </Form.Item>

            <Form.Item label="住 址:" name="Address">
              <Input />
            </Form.Item>
            <Form.Item label="e-mail:" name="Email">
              <Input />
            </Form.Item>
            <Form.Item label="栽培總面積/公頃:" name="TotalCultivationArea">
              <Input />
            </Form.Item>
            
            <Form.Item label="編號:" name="Number">
              <Input />
            </Form.Item>
            <Form.Item label="農地地籍號碼:" name="LandParcelNumber">
              <Input />
            </Form.Item>
            <Form.Item label="面積:" name="Area">
              <Input />
            </Form.Item>
            <Form.Item label="種植作物:" name="Crop">
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

export default Page01;
