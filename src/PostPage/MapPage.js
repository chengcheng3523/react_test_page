import React, { useState, useEffect } from 'react'; // 加入 useEffect
import axios from 'axios'; // 加入 axios
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Input, Card, message, Spin } from 'antd'; // 加入 Spin

const MapPage = () => {
    const [size] = useState('large'); // default is 'middle'
    const [materials, setMaterials] = useState([]); // 儲存輸入的資料
    const [cards, setCards] = useState([{}]); // 初始状态为一个空的卡片
    const [loading, setLoading] = useState(false); // 加載動畫狀態

    // 新增 fetchData 函數以從後端獲取資料
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://127.0.0.1:5000/api/materialsandcode05071013/get');
            setMaterials(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    // 在組件掛載時調用 fetchData 函數
    useEffect(() => {
        fetchData();
    }, []);

    // 更新 handleSave 函數以提交資料到後端
    const handleSave = async () => {
        const payload = {
            UC: "1",
            FieldCode: cards[0].FieldCode,
            NutrientMaterialCode: cards[0].NutrientMaterialCode,
            NutrientMaterialName: cards[0].NutrientMaterialName,
            FertilizerMaterialCode: cards[0].FertilizerMaterialCode,
            FertilizerMaterialName: cards[0].FertilizerMaterialName,
            PestControlMaterialCode: cards[0].PestControlMaterialCode,
            PestControlMaterialName: cards[0].PestControlMaterialName,
            OtherMaterialCode: cards[0].OtherMaterialCode,
            OtherMaterialName: cards[0].OtherMaterialName,
        };

        try {
            setLoading(true);
            await axios.post('http://127.0.0.1:5000/api/materialsandcode05071013/post', payload);
            message.success('資料已儲存');
            await fetchData(); // 重新獲取資料
            setCards([{}]); // 重置卡片
            setLoading(false);
        } catch (error) {
            message.error('儲存資料失敗');
            console.error('Error saving data:', error);
            setLoading(false);
        }
    };

    // 新增 handleChange 函數以更新卡片的狀態
    const handleChange = (index, field, value) => {
        const updatedCards = [...cards];
        updatedCards[index][field] = value;
        setCards(updatedCards);
    };

    // 更新 handleClick 函數以添加新卡片
    const handleClick = () => {
        setCards([...cards, {}]); // 添加一个新的空卡片
    };

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="90px" />
            <div>
                <h1>表5.養液配製資材與代碼對照表</h1>
            </div>

            {cards.map((card, index) => (
                <Card key={index}
                      title="養液配製資材與代碼對照表"
                      // extra={<Button onClick={handleClick}>More</Button>}
                      style={{ width: '50%', margin: '20px auto' }}>

                    <Input
                        placeholder="區域代碼"
                        value={card.FieldCode || ''}
                        onChange={(e) => handleChange(index, 'FieldCode', e.target.value)}
                    />
                    <Input
                        placeholder="養液資材代碼"
                        value={card.NutrientMaterialCode || ''}
                        onChange={(e) => handleChange(index, 'NutrientMaterialCode', e.target.value)}
                    />
                    <Input
                        placeholder="養液資材名稱"
                        value={card.NutrientMaterialName || ''}
                        onChange={(e) => handleChange(index, 'NutrientMaterialName', e.target.value)}
                    />
                    <Input
                        placeholder="肥料資材代碼"
                        value={card.FertilizerMaterialCode || ''}
                        onChange={(e) => handleChange(index, 'FertilizerMaterialCode', e.target.value)}
                    />
                    <Input
                        placeholder="肥料資材名稱"
                        value={card.FertilizerMaterialName || ''}
                        onChange={(e) => handleChange(index, 'FertilizerMaterialName', e.target.value)}
                    />
                    <Input
                        placeholder="病蟲害防治資材代碼"
                        value={card.PestControlMaterialCode || ''}
                        onChange={(e) => handleChange(index, 'PestControlMaterialCode', e.target.value)}
                    />
                    <Input
                        placeholder="病蟲害防治資材名稱"
                        value={card.PestControlMaterialName || ''}
                        onChange={(e) => handleChange(index, 'PestControlMaterialName', e.target.value)}
                    />
                    <Input
                        placeholder="其他資材代碼"
                        value={card.OtherMaterialCode || ''}
                        onChange={(e) => handleChange(index, 'OtherMaterialCode', e.target.value)}
                    />
                    <Input
                        placeholder="其他資材名稱"
                        value={card.OtherMaterialName || ''}
                        onChange={(e) => handleChange(index, 'OtherMaterialName', e.target.value)}
                    />
                </Card>
            ))}

            <div style={{ display: 'flex' }}>
                <Button size={size} style={{ width: '50%', margin: '20px auto' }} onClick={handleSave}>
                    {loading ? <Spin /> : 'To Save'}
                </Button>
            </div>

            <div style={{ padding: '20px' }}>
                <h2>新增的資材與代碼</h2>
                <ul>
                    {materials.map((item, index) => (
                        <li key={index}>
                            {item[0]}, {item[1]}, {item[2]}, {item[3]}, {item[4]}, {item[5]}, {item[6]}, {item[7]}, {item[8]}, {item[9]}
                        </li>
                    ))}
                </ul>
            </div>

            <ClearFix height="500px" />
        </Loginlayout>
    );
};

export default MapPage;
// 引入 Spin 來顯示加載動畫。
// 使用 loading 狀態來控制加載動畫的顯示。
// 更新 handleSave 函數，當按下「新增」按鈕時顯示加載動畫。
// 在顯示資料的部分，確保正確使用索引來訪問每個資料項的值。注意這裡是使用 item[0], item[1], item[2], 等，因為從後端返回的是一個嵌套的陣列。
// 確保在資料更新後，重新獲取並顯示最新的資料