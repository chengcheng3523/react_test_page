import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page016 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/pasr19/post', values);
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
        <h1>表17.採收及採後處理紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >

            <Form.Item label="包裝場所:"  name="">
            <Input />
            </Form.Item>
            <Form.Item label="販售日期:"  name="SaleDate">
            <Input />
            </Form.Item>
            <Form.Item label="產品名稱:"  name="ProductName">
            <Input />
            </Form.Item>
            
           
            <Form.Item label="銷售對象:" name="SalesTarget">
              <Radio.Group value={value} onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={"零售(地點)"}>零售(地點)</Radio>
                  <Radio value={"盤商"}>盤商</Radio>
                  <Radio value={"其他"}>其他
                    {valueA === "其他" ? (
                      <Input placeholder="請填寫其他採後處理內容:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="批次編號："  name="BatchNumber">
            <Input />
            </Form.Item>

            <Form.Item label="出貨量(公斤):"  name="ShipmentQuantity">
            <Input />
            </Form.Item>
            <Form.Item label="包裝規格:"  name="PackagingSpec">
            <Input />
            </Form.Item>
            <Form.Item label="標章使用數量:"  name="LabelUsageQuantity">
            <Input />
            </Form.Item>
            <Form.Item label="標章作廢數量:"  name="LabelVoidQuantity">
            <Input />
            </Form.Item>

            <Form.Item label="驗證狀態:" name="VerificationStatus">
              <Radio.Group value={value} onChange={onChangeA}>
                <Space direction="vertical">
                  <Radio value={"非驗證產品"}>非驗證產品</Radio>
                  <Radio value={"驗證產品，驗證機構："}>驗證產品，驗證機構：
                    {value === "驗證產品，驗證機構：" ? (
                      <Input placeholder="請填驗證機構：" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>

          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page016;
