import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";
import { useNavigate } from 'react-router-dom';
import Loginlayout from "../components/layout/Loginlayout";

const CompanyPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/data');
            setDataList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            await axios.post('/api/data', { input: inputValue });
            setMessage('Data added successfully!');
            fetchData();
            setInputValue('');
        } catch (error) {
            setMessage('Failed to add data.');
            console.error('Error adding data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = () => {
        navigate("/mall");
    };

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="100px" />
            <div>
                <h1>Company Page (顯示查詢作物產銷履歷紀錄)</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="輸入內容" value={inputValue} onChange={handleInputChange} />
                <button type="submit" disabled={loading}>
                    {loading ? '提交中...' : '提交'}
                </button>
            </form>
            {message && <p>{message}</p>}
            <div>
                <h2>Data List</h2>
                <ul>
                    {dataList.map((data, index) => (
                        <li key={index}>{data.input}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handleButtonClick}>跳轉到商城</button>
            <ClearFix height="500px" />
        </Loginlayout>
    );
};

export default CompanyPage;
// 解釋
// 狀態管理：
//
// inputValue：存儲輸入框的值。
// dataList：存儲從 API 獲取的資料列表。
// loading：管理加載狀態。
// message：顯示操作結果的訊息。
// useEffect Hook：
//
// 組件掛載時呼叫 fetchData 函數來取得初始資料。
// fetchData 函數：
//
// 使用 Axios 向 /api/data 端點發送 GET 請求來取得資料並更新 dataList。
// handleInputChange 函數：
//
// 處理輸入框變更，更新 inputValue 狀態。
// handleSubmit 函數：
//
// 阻止表單默認提交行為。
// 設置加載狀態為 true。
// 使用 Axios 向 /api/data 端點發送 POST 請求來新增資料。
// 成功後顯示成功訊息並更新資料列表。
// 失敗後顯示錯誤訊息。
// 最後，重置表單和加載狀態。
// UI 渲染：
//
// 表單部分包括輸入框和提交按鈕，當 loading 狀態為 true 時顯示「提交中...」。
// 根據 message 狀態顯示操作結果。
// 資料列表部分從 dataList 渲染每一筆資料。
// 按鈕用來跳轉到商城頁面。