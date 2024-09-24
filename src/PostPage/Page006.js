import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page006 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/fr06/post', values);
      console.log('成功發送請求，回應:', response.data);
      form.resetFields(); // 清空輸入框
    } catch (error) {
      console.error('發送請求失敗:', error);
    }
  };
  const [form] = Form.useForm(); // 使用 Form.useForm 鉤子

  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />
      <div>
        <h1>表6.肥料施用紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
            <Form.Item label="使用日期:"  name="DateUsed">
            <Input />
            </Form.Item>
            <Form.Item label="田區代號 :"  name="FieldCode">
            <Input />
            </Form.Item>
            <Form.Item label="作物:" name="Crop">
              <Input />
            </Form.Item>            
            <Form.Item label="資材代碼或資材名稱:" name="MaterialCodeOrName">
              <Input />
            </Form.Item>
            <Form.Item label="施肥別(基肥.追肥):" name="FertilizerType">
              <Input />
            </Form.Item>
            <Form.Item label="稀釋倍數(液肥適用):" name="DilutionFactor">
              < Input />
            </Form.Item>
            <Form.Item label="操作人員:" name="Operator">
              < Input />
            </Form.Item>
            <Form.Item label="若為自製堆肥/液肥，簡述製作流程:" name="Textsop">
            <Input.TextArea />
            </Form.Item>
          
            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page006;
