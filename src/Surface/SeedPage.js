import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space } from 'antd';
import axios from 'axios';

const SeedPage = () => {


  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/seed02/post', values);
      console.log('成功發送請求，回應:', response.data);
    } catch (error) {
      console.error('發送請求失敗:', error);
    }
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
      <ClearFix height="100px" />
      <div>
        <h1>表2.種子(苗)登記表</h1>
      </div>

      {cards.map((card, index) => (
        <Card
          key={index}
          title="種子(苗)登記表"
          extra={<Button onClick={handleClick}>More</Button>}
        >
          <Form
           
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
          >
            <Form.Item label="栽培作物:" name="Cultivated Crop">
              <Input />
            </Form.Item>

            <Form.Item label="栽培品種:" name="Crop Variety">
              <Input />
            </Form.Item>

            <Form.Item label="種子(苗)來源:" name="Seed Source">
              <Radio.Group onChange={handleChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>自行育苗</Radio>
                  <Radio value={2}>
                    購買來源
                    {value === 2 ? (
                      <Input style={{ width: 100, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="育苗(購入)日期:" name="Seedling Purchase Date">
              <DatePicker />
            </Form.Item>

            <Form.Item label="育苗(購入)種類:" name="Seedling Purchase Type">
              <Select>
                <Select.Option value="種子">種子</Select.Option>
                <Select.Option value="種苗">種苗</Select.Option>
                <Select.Option value="繁殖體">繁殖體</Select.Option>
              </Select>
            </Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
        </Card>
      ))}
      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default SeedPage;
