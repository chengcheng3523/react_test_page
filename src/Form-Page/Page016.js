import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page016 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/emr16/post', values);
      console.log('成功發送請求，回應:', response.data);
      form.resetFields(); // 清空輸入框
    } catch (error) {
      console.error('發送請求失敗:', error);
    }
  };
  const [form] = Form.useForm(); // 使用 Form.useForm 鉤子
  const [value, setValue] = useState(''); // 定義 value 狀態
  const [valueA, setValueA] = useState(''); // 定義 valueA 狀態
  const onChange = (e) => {
    setValueA(e.target.value);
  };

  const onChangeA = (e) => {
    setValue(e.target.value);
  };

  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />

      <div>
        <h1>表16.器具/機械/設備之保養、維修、校正及清潔管理紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
            <Form.Item label="日期:"  name="Date">
            <Input />
            </Form.Item>
           
            <Form.Item label="項目:" name="Item">
              <Radio.Group value={value} onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={"噴霧機"}>噴霧機</Radio>
                  <Radio value={"割草機"}>割草機</Radio>
                  <Radio value={"中耕機"}>中耕機</Radio>
                  <Radio value={"選別機"}>選別機</Radio>
                  <Radio value={"貯藏/溫控設備"}>貯藏/溫控設備</Radio>
                  <Radio value={"搬運車"}>搬運車</Radio>
                  <Radio value={"貨車"}>貨車</Radio>
                  <Radio value={"其他"}>其他
                    {valueA === "其他" ? (
                      <Input placeholder="請填寫其他購買來源:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="作業內容:" name="Operation">
              <Radio.Group value={value} onChange={onChangeA}>
                <Space direction="vertical">
                  <Radio value={"清潔"}>清潔</Radio>
                  <Radio value={"保養"}>保養</Radio>
                  <Radio value={"維修"}>維修</Radio>
                  <Radio value={"校正"}>校正</Radio>
                  <Radio value={"其他"}>其他
                    {value === "其他" ? (
                      <Input placeholder="請填寫其他購買來源:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="記錄人:"  name="Recorder">
            <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>

          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page016;
