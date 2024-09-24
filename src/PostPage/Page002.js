import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page002 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/seed02/post', values);
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
        <h1>表2.種子(苗)登記表</h1>
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
            <Form.Item label="作物 :"  name="Crop">
            <Input />
            </Form.Item>
            <Form.Item label="栽培作物:" name="CultivatedCrop">
              <Input />
            </Form.Item>
            <Form.Item label="栽培品種:" name="CropVariety">
              <Input />
            </Form.Item>
            <Form.Item label="種子(苗)來源:" name="SeedSource">
              <Radio.Group value={value} onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={"自行育苗"}>自行育苗</Radio>
                  <Radio value={"購買來源"}>購買來源
                    {value === "購買來源" ? (
                      <Input placeholder="請填寫其他購買來源:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="育苗(購入)日期:" name="SeedlingPurchaseDate">
              < Input />
            </Form.Item>
            <Form.Item label="育苗(購入)種類:" name="SeedlingPurchaseType">
              <Select>
                <Select.Option value="種子">種子</Select.Option>
                <Select.Option value="種苗">種苗</Select.Option>
                <Select.Option value="繁殖體">繁殖體</Select.Option>
              </Select>
            </Form.Item > 
            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page002;
