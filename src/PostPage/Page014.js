import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page008 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/reft14/post', values);
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
  const [valueA, setValueA] = useState(''); // 定義 value 狀態
  const onChangeA = (e) => {
    setValueA(e.target.value);
  };


  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />

      <div>
        <h1>表14.其他資材入出庫紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
            <Form.Item label="資材名稱:"  name="MaterialName">
            <Input />
            </Form.Item>
            <Form.Item label="廠商:"  name="Manufacturer">
            <Input />
            </Form.Item>
            <Form.Item label="供應商:" name="Supplier">
              <Input />
            </Form.Item>
     
            <Form.Item label="包裝單位:" name="PackagingUnit">
              <Radio.Group value={value} onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={"包"}>包</Radio>
                  <Radio value={"瓶"}>瓶</Radio>
                  <Radio value={"罐"}>罐</Radio>
                  <Radio value={"其他"}>其他
                    {value === "其他" ? (
                      <Input placeholder="請填寫其他包裝單位:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="包裝容量:" name="PackagingVolume">
              <Radio.Group value={valueA} onChange={onChangeA}>
                <Space direction="vertical">
                <Radio value="公克">公克</Radio>
                <Radio value="公斤">公斤</Radio>
                <Radio value="毫升">毫升</Radio>
                <Radio value="公升">公升</Radio>
                <Radio value="其他">其他
                {valueA === "其他" ? (
                      <Input placeholder="請填寫其他包裝容量:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                     </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="日期:" name="Date">
              < Input />
            </Form.Item>
            <Form.Item label="購入量:" name="PurchaseQuantity">
              < Input />
            </Form.Item>
            <Form.Item label="使用量:" name="UsageQuantity">
              < Input />
            </Form.Item>
            <Form.Item label="剩餘量:" name="RemainingQuantity">
              < Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page008;
