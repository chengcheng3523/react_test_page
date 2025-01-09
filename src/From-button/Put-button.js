import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClearFix from "../components/common/ClearFix";
import { useNavigate } from 'react-router-dom';
import Loginlayout from "../components/layout/Loginlayout";

const PutPage = () => {

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="100px" />
            <div>
                <h1>PutPage (修改資料)</h1>
            </div>
        </Loginlayout>
    );
};

export default PutPage;