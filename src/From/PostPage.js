import React, { useState, useEffect } from 'react';
import ClearFix from "../components/common/ClearFix";
import Loginlayout from "../components/layout/Loginlayout";

const PostPage = () => {

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="100px" />
            <div>
                <h1>PostPage (新增資料)</h1>
            </div>
        </Loginlayout>
    );
};

export default PostPage;