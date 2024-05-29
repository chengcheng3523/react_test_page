import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Input, Card, message, Spin, Table } from 'antd';


const MapPage = () => {
    const [size] = useState('large');
    const [materials, setMaterials] = useState([]);
    const [cards, setCards] = useState([{}]);
    const [loading, setLoading] = useState(false);
    const columns = [
        {
            title: '田區代號',
            dataIndex: 'FieldCode',
        },
        {
            title: '養液配製資材代碼',
            dataIndex: 'NutrientMaterialCode',
        },
        {
            title: '養液配製資材名稱',
            dataIndex: 'NutrientMaterialName',
        },
        {
            title: '肥料資材代碼',
            dataIndex: 'FertilizerMaterialCode',
        },
        {
            title: '肥料資材名稱',
            dataIndex: 'FertilizerMaterialName',
        },
        {
            title: '防治資材代碼',
            dataIndex: 'PestControlMaterialCode',
        },
        {
            title: '防治資材名稱',
            dataIndex: 'PestControlMaterialName',
        },
        {
            title: '其他資材代碼',
            dataIndex: 'OtherMaterialCode',
        },
        {
            title: '其他資材名稱',
            dataIndex: 'OtherMaterialName',
        },  {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record, index) => (
                <Button
                    type="danger"
                    onClick={() => handleDelete(record.FieldCode)}
                    style={{marginLeft: '10px'}}
                >
                    刪除
                </Button>
            ),
        },

    ];
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`http://127.0.0.1:5000/api/materialsandcode05071013/${id}`);
            message.success('資料已刪除');
            await fetchData();
            setLoading(false);
        } catch (error) {
            message.error('刪除資料失敗');
            console.error('Error deleting data:', error);
            setLoading(false);
        }
    };

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

    useEffect(() => {
        fetchData();
    }   , []);

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };
    const tableData = materials.map(item => ({
        FieldCode: item[0],
        NutrientMaterialCode: item[1],
        NutrientMaterialName: item[2],
        FertilizerMaterialCode: item[3],
        FertilizerMaterialName: item[4],
        PestControlMaterialCode: item[5],
        PestControlMaterialName: item[6],
        OtherMaterialCode: item[7],
        OtherMaterialName: item[8],
        // 添加其他需要的屬性
    }));


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
            await fetchData();
            setCards([{}]);
            setLoading(false);
        } catch (error) {
            message.error('儲存資料失敗');
            console.error('Error saving data:', error);
            setLoading(false);
        }
    };
    const [tableDataState, setTableDataState] = useState([]);


    const handleChange = (index, field, value) => {
        const updatedCards = [...cards];
        updatedCards[index][field] = value;
        setCards(updatedCards);
    };

    const handleClick = () => {
        setCards([...cards, {}]);
    };


    return (
        <Loginlayout fixedHeader>
            <ClearFix height="90px"/>
            <div>
                <h1>表5.養液配製資材與代碼對照表</h1>
            </div>

            {cards.map((card, index) => (
                <Card key={index}
                      title="養液配製資材與代碼對照表"
                      style={{width: '50%', margin: '20px auto'}}>
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

            <div style={{display: 'flex'}}>
                <Button size={size} style={{width: '50%', margin: '20px auto'}} onClick={handleSave}>
                    {loading ? <Spin/> : 'To Save'}
                </Button>
            </div>

            <div style={{padding: '20px'}}>
                <h2>新增的資材與代碼</h2>
            <Table

                columns={columns}
                rowKey={(record) => record.FieldCode}
                dataSource={tableData}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            /> </div>
            <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default MapPage;
