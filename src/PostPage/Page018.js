import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page018 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/dor18/post', values);
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
        <h1>表18.乾燥作業紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
            <Form.Item label="處理場所:"  name="">
            <Input />
            </Form.Item>
            <Form.Item label="處理日期 :"  name="ProcessDate">
            <Input />
            </Form.Item>
            <Form.Item label="品項:" name="Item">
              <Input />
            </Form.Item>
            <Form.Item label="批次編號:" name="BatchNumber">
              <Input />
            </Form.Item>
            <Form.Item label="鮮重(公斤):" name="FreshWeight">
              <Input  />
            </Form.Item>
            <Form.Item label="作業內容:" name="Operation">
              <Radio.Group value={value} onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={"金針浸泡"}>金針浸泡</Radio>
                  <Radio value={"金針漂水"}>金針漂水</Radio>
                  <Radio value={"日曬"}>日曬</Radio>
                  <Radio value={"乾燥"}>乾燥</Radio>
                  <Radio value={"作業內容"}>作業內容
                    {value === "作業內容" ? (
                      <Input placeholder="作業內容:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="乾重 (公斤):" name="DryWeight">
              < Input />
            </Form.Item>
            <Form.Item label="備註:" name="Remarks">
              < Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page018;
