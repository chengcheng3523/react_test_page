import React, {useState} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Radio, Space, } from 'antd';
import axios from 'axios';
const Page003 = () => {

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/records03/post', values);
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
        <h1>表3.栽培工作紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
          >
             <Form.Item label="作業日期:"  name="OperationDate">
            <Input />
            </Form.Item>
            <Form.Item label="田區代號 :"  name="FieldCode">
            <Input />
            </Form.Item>
            <Form.Item label="作物:" name="Crop">
              <Input />
            </Form.Item>
            <Form.Item label="作業內容(可填寫代碼):" name="CropContent">
              <Select>
                <Select.Option value="(1-1) 整地">(1-1) 整地</Select.Option>
                <Select.Option value="(1-2) 作畦">(1-2) 作畦</Select.Option>
                <Select.Option value="(1-3) 配置灌溉/澆水管線">(1-3) 配置灌溉/澆水管線</Select.Option>
                <Select.Option value="(1-4) 土壤改良">(1-4) 土壤改良</Select.Option>
                <Select.Option value="(1-5) 土壤消毒">(1-5) 土壤消毒</Select.Option>
                <Select.Option value="(1-6) 設施操作">(1-6) 設施操作</Select.Option>
                <Select.Option value="(1-8) 遮蔭網">(1-8) 遮蔭網</Select.Option>
                <Select.Option value="(2-1) 介質消毒">(2-1) 介質消毒</Select.Option>
                <Select.Option value="(2-2) 裝袋作業">(2-2) 裝袋作業</Select.Option>
                <Select.Option value="(2-3) 上架">(2-3) 上架</Select.Option>
                <Select.Option value="(2-4) 介質調配">(2-4) 介質調配</Select.Option>
                <Select.Option value="(2-5) 養液配置">(2-5) 養液配置</Select.Option>  
                <Select.Option value="(3-1) 播種">(3-1) 播種</Select.Option>
                <Select.Option value="(3-2) 育苗">(3-2) 育苗</Select.Option>
                <Select.Option value="(3-3) 定植(移植)">(3-3) 定植(移植)</Select.Option>
                <Select.Option value="(3-4) 播種前種子處理">(3-4) 播種前種子處理</Select.Option>
                <Select.Option value="(4-1) 中耕">(4-1) 中耕</Select.Option>
                <Select.Option value="(4-2) 灌溉/澆水">(4-2) 灌溉/澆水</Select.Option>
                <Select.Option value="(4-3) 培土">(4-3) 培土</Select.Option>
                <Select.Option value="(4-4) 摘葉">(4-4) 摘葉</Select.Option>
                <Select.Option value="(4-5) 缺株補植">(4-5) 缺株補植</Select.Option>
                <Select.Option value="(4-6) 整蔓">(4-6) 整蔓</Select.Option>
                <Select.Option value="(4-7) 授粉">(4-7) 授粉</Select.Option>
                <Select.Option value="(4-8) 套袋">(4-8) 套袋</Select.Option>
                <Select.Option value="(4-9) 立支柱">(4-9) 立支柱</Select.Option>
                <Select.Option value="(5-1) 基肥">(5-1) 基肥</Select.Option>
                <Select.Option value="(5-2) 追肥">(5-2) 追肥</Select.Option>
                <Select.Option value="(5-3) 液肥">(5-3) 液肥</Select.Option>
                <Select.Option value="(6-1) 施用防治資材">(6-1) 施用防治資材</Select.Option>
                <Select.Option value="(6-2) 栽培防治">(6-2) 栽培防治</Select.Option>
                <Select.Option value="(6-3) 物理防治">(6-3) 物理防治</Select.Option>
                <Select.Option value="(6-4) 生物防治">(6-4) 生物防治</Select.Option>
                <Select.Option value="(6-5) 忌避作物">(6-5) 忌避作物</Select.Option>
                <Select.Option value="(6-6) 人工除草">(6-6) 人工除草</Select.Option>
                <Select.Option value="(6-7) 覆蓋">(6-7) 覆蓋</Select.Option>
                <Select.Option value="(6-8) 機械中耕">(6-8) 機械中耕</Select.Option>
                <Select.Option value="(7-1) 採收">(7-1) 採收</Select.Option>
                <Select.Option value="(7-2) 產季結束">(7-2) 產季結束</Select.Option>
                <Select.Option value="8. 其他">8. 其他</Select.Option>
              </Select>
            </Form.Item > 
            <Form.Item label="備註作業內容：(選填)" name="WorkItemCode">
             <Input.TextArea />
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page003;
