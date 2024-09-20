import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space ,InputNumber} from 'antd';

const WorkPage = () => {

  const onFinish = (values) => {
      console.log('Received values of form:', values);
      // 在這裡處理表單提交後的操作，比如儲存數據等
  };
      
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [size] = useState('large'); // default is 'middle'

  const [cards, setCards] = useState([{}]); // 初始状态为一个空的卡片

  function handleClick() {
    const newCard = {}; // 创建一个新的空卡片
    setCards([...cards, newCard]); // 将新卡片添加到卡片数组中
  }

  const [value, setValue] = useState("1");
  const handleChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const { TextArea } = Input;
  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />
      <div>
        <h1>表3.栽培工作紀錄</h1>
      </div>

      {cards.map((card, index) => (
        <Card
          key={index}
          title="栽培工作紀錄"
          extra={<Button onClick={handleClick}>More</Button>}
        >
          <Form
           
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
          >
           <Form.Item label="作業日期:" name="Seedling Purchase Date">
              <DatePicker />
            </Form.Item>

          <Form.Item label="田區代號:" name="Cultivated Crop">
              <Input />
            </Form.Item>

            <Form.Item label="作物:" name="Crop Variety">
              <Input />
            </Form.Item>

           

            <Form.Item label="作業內容(可填寫代碼)" name="Seedling Purchase Type">
              <Select>
                <Select.Option value="(1-1)整地">(1-1) 整地</Select.Option>
                <Select.Option value="(1-2)作畦">(1-2) 作畦</Select.Option>
                <Select.Option value="(1-3)配置灌溉/澆水管線">(1-3) 配置灌溉/澆水管線</Select.Option>
                <Select.Option value="(1-4) 土壤改良">(1-4) 土壤改良</Select.Option>
                <Select.Option value="(1-5) 土壤消毒">(1-5) 土壤消毒</Select.Option>
                <Select.Option value="(1-6) 設施操作">(1-6) 設施操作</Select.Option>
                <Select.Option value="(1-7) 開溝">(1-7) 開溝</Select.Option>
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
                <Select.Option value=" (4-1) 中耕">(4-1) 中耕</Select.Option>
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


             </Select>
            </Form.Item>
            <Form.Item  label="其他">
                <TextArea                  
                    onChange={(e) => setValue(e.target.value)}
                    placeholder=" 8. 其他:若非上述內容，請填寫其他並註明工作內容。"
                    autoSize={{minRows: 3,maxRows: 5,}}                    />
               </Form.Item>




            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
        </Card>
      ))}
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default WorkPage;
