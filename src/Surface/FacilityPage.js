import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space ,InputNumber} from 'antd';


const FacilityPage = () => {
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

  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


    return (
        <Loginlayout fixedHeader>           
            <ClearFix height="100px"/>             
            <div><h1>表9.有害生物防治或環境消毒資材施用紀錄</h1></div>           

      {cards.map((card, index) => (
        <Card
          key={index}
          title="有害生物防治或環境消毒資材施用紀錄"
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
            onFinish={onFinish} // 添加此行
            >
            <Form.Item label="使用日期:" name="Date">
              <DatePicker />
            </Form.Item>



            <Form.Item label="田區代號:" name="Cultivated"><Input /></Form.Item>

            <Form.Item label="作物:" name="Crop "><Input /></Form.Item>
            <Form.Item label="防治對象:" name="Crop Variety"><Input /></Form.Item>
            <Form.Item label="資材代碼或名稱" name="Crop Variety"><Input /></Form.Item>
            <Form.Item label="用水量:" name="Crop Variety"><InputNumber />單位:公升</Form.Item>
            <Form.Item label="藥劑使用量:" name="Crop Variety"><InputNumber />單位:公斤.公升</Form.Item>
            <Form.Item label="稀釋倍數:" name="Crop"><InputNumber /></Form.Item>
            <Form.Item label="安全採收期(天):" name="Crop Variety"><InputNumber />單位:天</Form.Item>

            <Form.Item label="操作人員:" name="Crop Variety"><Input /></Form.Item>

            <Form.Item label="操作方式:" name="Seed Source">          
              <Radio.Group onChange={handleChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>噴灑</Radio>
                  <Radio value={2}>撒施</Radio>
                  <Radio value={3}>灌注</Radio>
                  <Radio value={4}>
                  其他
                    {value === 4 ? (
                      <Input style={{ width: 100, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
        </Card>     
         ))}
 
        <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default FacilityPage
