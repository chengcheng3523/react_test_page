import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Card, Form, Input, Select, DatePicker, Radio, Space ,InputNumber} from 'antd';



const SolutionPage=() => {
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

// const [value, setValue] = useState("1");
// const handleChange = (e) => {
// console.log('radio checked', e.target.value);
// setValue(e.target.value);
// };
const { TextArea } = Input;

const [value, setValue] = useState(null);

const handleChange = (newValue) => {
  // 保留小数点后两位
  const roundedValue = parseFloat(newValue).toFixed(2);
  setValue(roundedValue);
};

    return (
        <Loginlayout fixedHeader>           
            <ClearFix height="100px"/>             
            <div>
            <h1>
		  表4.養液配製紀錄
            </h1>
            </div>          


            {cards.map((card, index) => (
        <Card
          key={index}
          title="肥料施用紀錄"
          extra={<Button onClick={handleClick}>More</Button>}>

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

            <Form.Item label="配製日期:" name="Date"><DatePicker /></Form.Item>
            <Form.Item label="資材代碼或資材名稱" ><Input /></Form.Item>
            <Form.Item label="使用量:" name="Crop Variety"><InputNumber />單位:公斤.公升</Form.Item>
            
            <Form.Item  label="配製流程簡述">
                <TextArea                  
                    onChange={(e) => setValue(e.target.value)}
                    placeholder=" 配製流程簡述"
                    autoSize={{minRows: 3,maxRows: 5,}}/>
               </Form.Item>

               <Form.Item label="最終pH值：" name="Crop Variety">
               <InputNumber style={{ width: 200, }}
                      value={value}
                      min={0}
                      max={20}
                      step={0.01} // 设置步长为 0.01，即允许输入小数点后两位
                      onChange={handleChange}/>                
                </Form.Item>
            
                <Form.Item label="最終EC值(mS/cm)：" name="Crop">
               <InputNumber style={{ width: 200, }}
                      value={value}
                      min={0}
                      max={20}
                      step={0.01} // 设置步长为 0.01，即允许输入小数点后两位
                      onChange={handleChange}/>                
                </Form.Item>
                <Form.Item label="配製人員" ><Input /></Form.Item>

            <Button type="primary" htmlType="submit">儲存</Button>
          </Form>
        </Card>     
         ))}
 
        <ClearFix height="500px"/>
        </Loginlayout>
    );
};
export default SolutionPage;
