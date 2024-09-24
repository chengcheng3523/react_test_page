import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page004 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/nar04/post', values);
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
        <h1>表4.養液配製紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
            <Form.Item label="配製日期:"  name="PreparationDate">
            <Input />
            </Form.Item>
            <Form.Item label="資材代碼或資材名稱 :"  name="MaterialCodeOrName">
            <Input />
            </Form.Item>
            <Form.Item label="使用量(公斤.公升):" name="UsageAmount">
              <Input />
            </Form.Item>
            <Form.Item label="配製流程簡述:" name="PreparationProcess">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="最終pH值:" name="FinalpHValue">
              <Input />
            </Form.Item>
            <Form.Item label="最終EC值(mS/cm):" name="FinalECValue">
              < Input />
            </Form.Item>
            <Form.Item label="配製人員:" name="PreparerName">
              <Input />
            </Form.Item > 
            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page004;
