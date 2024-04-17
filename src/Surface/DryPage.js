import React, { useState } from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../components/common/ClearFix";
import { DatePicker, Space, InputNumber, Select } from 'antd';
import { Button, Flex, Input,Card } from 'antd';
import Loginlayout from "../components/layout/Loginlayout";

const DryPage = () => {
    const [size] = useState('large'); // default is 'middle'

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onChangeDatePicker = (date, dateString) => {
        console.log(date, dateString);
    };
    const [cards, setCards] = useState([{}]); // 初始状态为一个空的卡片

  function handleClick() {
    setCards([...cards, {}]); // 添加一个新的空卡片
  }

    return (
     

        <DefaultLayout fixedHeader>    
            <Loginlayout >       
            <ClearFix height="90px"/>      
            <div>
            <h1>
                表12.其他資材使用紀錄
            </h1>
        </div>       
            {cards.map((card, index) => (
            <Card  
            
             title="其他資材使用紀錄" extra={<Button onClick={handleClick}>More</Button>}  style={{ width: '50%', margin: '0 auto' }}>{/* RWD */}
            <Flex vertical gap={10}>
                <div>
                    <span>使用日期：</span>       
                    <Space direction="vertical" size={12}>
                        <DatePicker onChange={onChangeDatePicker} needConfirm />
                    </Space>
                </div>
                
                <Input placeholder="田區代號" variant="filled" />
                <Input placeholder="作物" variant="filled" />
                <Input placeholder="資材代碼或資材名稱" variant="filled" />
                <div>
                    <span>使用量:</span>
                    <InputNumber min={1} max={10} defaultValue={3} />
                    <Space wrap>
                        <Select
                            defaultValue="包裝單位"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: '包裝', label: '包裝' },
                                { value: '瓶裝', label: '瓶裝' },
                                { value: '袋裝', label: '袋裝' }, 
                                { value: '罐裝', label: '罐裝' },
                                { value: '其他', label: '其他' },
                            ]}
                        />
                    </Space>
                </div>
                <Input placeholder="操作人員" variant="filled" />
                <Input placeholder="供應商" variant="filled" />         
                <Input placeholder="備註(例如:用途、使用方法等)"  variant="filled" />                
            </Flex>

            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small" wrap="wrap">          
                            
                </Flex>        
            </Flex>
            </Card>
            ))}
                 <div style={{ display: 'flex' }}>
                     <Button size={size} style={{ width: '50%', margin: '20px auto' }}>To Save</Button>
                </div>
        <ClearFix height="500px"/>
        </Loginlayout>
        </DefaultLayout>

    );

}
export default DryPage   ;