import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page009 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/envrec09/post', values);
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
        <h1>表9.有害生物防治或環境消毒資材施用紀錄</h1>
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
            <Form.Item label="田區代號:"  name="FieldCode">
            <Input />
            </Form.Item>
            <Form.Item label="作物:" name="Crop">
              <Input />
            </Form.Item>
            <Form.Item label="防治對象:" name="PestTarget">
              <Input />
            </Form.Item>
            <Form.Item label="資材代碼或名稱:" name="MaterialCodeOrName">
              <Input />
            </Form.Item>
            <Form.Item label="用水量(公升):" name="WaterVolume">
              <Input />
            </Form.Item>
            <Form.Item label="藥劑使用量(公斤.公升):" name="ChemicalUsage">
              <Input />
            </Form.Item>
            <Form.Item label="稀釋倍數:" name="DilutionFactor">
              <Input />
            </Form.Item>
            <Form.Item label="安全採收期(天):" name="SafetyHarvestPeriod">
              <Input />
            </Form.Item>
            <Form.Item label="操作人員:" name="Operato">
              <Input />
            </Form.Item>

            <Form.Item label="操作方式:" name="OperatorMethod">
              <Select>
                <Select.Option value="噴灑">噴灑</Select.Option>
                <Select.Option value="撒施">撒施</Select.Option>
                <Select.Option value="灌注">灌注</Select.Option>
                <Select.Option value="其他">其他</Select.Option>
              </Select>
            </Form.Item > 

            <Button type="primary" htmlType="submit">儲存</Button>

          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page009;
