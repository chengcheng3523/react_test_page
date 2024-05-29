import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space } from 'antd';
import axios from 'axios';
import moment from 'moment';
const SeedPage = () => {

  const onFinish = async (values) => {
    // Format the date before sending it to the server
    values['Seedling Purchase Date'] = moment(values['Seedling Purchase Date']).format('YYYY-MM-DD');
  
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
// 在適當的地方（例如 componentDidMount 或 useEffect 中）調用這個函數
async function fetchData() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/seed02/get');
    console.log(response.data); // 這裡只是將數據輸出到控制台，您可能需要根據您的需求來處理數據
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />

      <div>
        <h1>表2.種子(苗)登記表</h1>
      </div>
      <Form.Item  title="資料查詢:">
      
          <Input label="作物代號:"size={size} style={{ width: '20%', margin: '20px auto' }}/>
          <Button >查詢</Button>
      </Form.Item>


      {cards.map((card, index) => (
        <Card
          key={index}
          title="種子(苗)登記表"
          extra={<Button onClick={handleClick}>More</Button>}
        >
          <Form
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
          >
            <Form.Item  label="單位代號:" name="UC">
            <Input />
            </Form.Item>
            <Form.Item label="單位名稱:"  name="UN">
            <Input />
            </Form.Item>
            <Form.Item label="作物 :"  name="Crop">
            <Input />
            </Form.Item>

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
                      <Input placeholder="請填寫其他購買來源:" style={{ width: 200, marginLeft: 10 }} />
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
