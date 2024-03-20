// src/components/ItemsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemsList = () => {
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        getItemsData();
    }, []);

    const getItemsData = async () => {
        try {
            const response = await axios.get('你的API端點'); // 替換成你的實際API端點
            setItemsData(response.data);
        } catch (error) {
            console.error('獲取資料失敗：', error);
        }
    };

    return (
        <div>
            <h1>Items資料表</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>名稱</th>
                </tr>
                </thead>
                <tbody>
                {itemsData.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemsList;
