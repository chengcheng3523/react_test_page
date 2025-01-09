import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page016 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/hsph17/post', values);
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
            <Form.Item label="採收日期:"  name="HarvestDate">
            <Input />
            </Form.Item>
            <Form.Item label="田區代號:"  name="FieldCode">
            <Input />
            </Form.Item>
            <Form.Item label="作物名稱:"  name="CropName">
            <Input />
            </Form.Item>
            <Form.Item label="批次編號或履歷編號:"  name="BatchOrTraceNo">
            <Input />
            </Form.Item>
            <Form.Item label="採收重量(處理前)(公斤):"  name="HarvestWeight">
            <Input />
            </Form.Item>
            <Form.Item label="處理日期:"  name="ProcessDate">
            <Input />
            </Form.Item>
            
           
            <Form.Item label="採後處理內容:" name="PostHarvestTreatment">
              <Radio.Group value={value} onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={"清洗"}>清洗</Radio>
                  <Radio value={"整修"}>整修</Radio>
                  <Radio value={"去雜"}>去雜</Radio>
                  <Radio value={"分級"}>分級</Radio>
                  <Radio value={"預冷"}>預冷</Radio>
                  <Radio value={"冷藏"}>冷藏</Radio>
                  <Radio value={"去殼/去莢"}>去殼/去莢</Radio>
                  <Radio value={"其他"}>其他
                    {valueA === "其他" ? (
                      <Input placeholder="請填寫其他採後處理內容:" style={{ width: 200, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="處理後重量(公斤):"  name="PostTreatmentWeight">
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
