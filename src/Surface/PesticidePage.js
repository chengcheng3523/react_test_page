import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Flex, Input,Card } from 'antd';


const PesticidePage   = () => {
    const [size] = useState('large'); // default is 'middle'

    const [cards, setCards] = useState([{}]); // 初始状态为一个空的卡片

  function handleClick() {
    setCards([...cards, {}]); // 添加一个新的空卡片
  }

    return (
     
        
        <Loginlayout fixedHeader>           
            <ClearFix height="90px"/>      
            <div>
            <h1>
            表7.肥料資材與代碼對照表
            </h1>
          </div>
            
            {cards.map((card, index) => (
            <Card key={index}
            title="肥料資材與代碼對照表" 
            extra={<Button onClick={handleClick}>More</Button>} 
            style={{ width: '50%', margin: '20px auto' }}>

                <Input placeholder="資材代碼" variant="borderless" />
                <Input placeholder="資材名稱" variant="borderless" />
                </Card>))}  

                <div style={{ display: 'flex' }}>
                     <Button size={size} style={{ width: '50%', margin: '20px auto' }}>To Save</Button>
                </div>
            <ClearFix height="500px"/>
        </Loginlayout>

   

);
}
export default PesticidePage     ;
