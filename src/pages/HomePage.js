import React, { useState } from 'react';
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";
import MainMenu from '../components/layout/MainMenu';// 引用 MainMenu 組件
import styled from "styled-components";


const HomePage = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    };

    return (
        <DefaultLayout fixedHeader>
            <MainMenu /> {/* 添加 MainMenu 組件 */}
            <ClearFix height="400px"/>
            {/* 其餘代碼 */}
            <h1>這是首頁</h1>

            <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="輸入內容" value={inputValue} onChange={handleInputChange} />
                <button type="submit">提交</button>
            </form>
            <ClearFix height="400px"/>

        </DefaultLayout>
    );
};

export default HomePage;