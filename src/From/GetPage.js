import React from 'react';
import ClearFix from "../components/common/ClearFix";
import Loginlayout from "../components/layout/Loginlayout";

const GetPage = () => {

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="100px" />
            <div>
                <h1>GetPage (查詢資料)</h1>
            </div>
        </Loginlayout>
    );
};

export default GetPage;