import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Input, Card } from 'antd';

const MapPage = () => {
    const [size] = useState('large'); // default is 'middle'
    const [materials, setMaterials] = useState([]); // 儲存輸入的資料
    
    const [cards, setCards] = useState([{}]); // 初始状态为一个空的卡片

    const handleSave = () => {
        // 儲存輸入的資料到狀態中
        setMaterials([...materials, { code: "", name: "" }]);
    };
    const handleCodeChange = (index, value) => {
        // 更新指定索引的資料的代碼
        const updatedMaterials = [...materials];
        updatedMaterials[index].code = value;
        setMaterials(updatedMaterials);
    };

    const handleNameChange = (index, value) => {
        // 更新指定索引的資料的名稱
        const updatedMaterials = [...materials];
        updatedMaterials[index].name = value;
        setMaterials(updatedMaterials);
    };

    function handleClick() {
        setCards([...cards, {}]); // 添加一个新的空卡片
    }

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="90px"/>
            <div>
                <h1>表5.養液配製資材與代碼對照表</h1>
            </div>

            {cards.map((card, index) => (
                <Card key={index}
                      title="養液配製資材與代碼對照表"
                      extra={<Button onClick={handleClick}>More</Button>}
                      style={{ width: '50%', margin: '20px auto' }}>

                    <Input placeholder="資材代碼" variant="borderless"/>
                    <Input placeholder="資材名稱" variant="borderless"/>
                </Card>
            ))}

            <div style={{ display: 'flex' }}>
                <Button size={size} style={{ width: '50%', margin: '20px auto' }}>To Save</Button>
            </div>
            <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default MapPage;
