import React, { useState } from 'react';
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";
import Button from 'react-bootstrap/Button';
// import styled from "styled-components";
import { Link }  from "react-router-dom";


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
           
            <ClearFix height="400px"/>
            <Button variant="primary">Primary Button</Button>
            <div>
                <h1>Home Page</h1>
                {/* 使用<Link>元件創建跳轉頁面的按鈕 */}              
                <button><Link to="/Login">Go to Login</Link></button>                                      
            </div>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="輸入內容" value={inputValue} onChange={handleInputChange} />
                <button type="submit">提交</button>
            </form>
            
            <ClearFix height="400px"/>
        </DefaultLayout>
    );
};

export default HomePage;