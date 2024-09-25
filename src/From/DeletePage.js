import React, { useState, useEffect } from 'react';
import ClearFix from "../components/common/ClearFix";
import Loginlayout from "../components/layout/Loginlayout";

const DeletePage = () => {

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="100px" />
            <div>
                <h1>Delete Page (刪除資料)</h1>
            </div>
        </Loginlayout>
    );
};

export default DeletePage;