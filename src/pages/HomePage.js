import React from 'react';
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";

const HomePage = () => {
    return (
        <DefaultLayout fixedHeader>           
            <ClearFix height="100px"/>  
            <div>
                <h1>Home Page(作物產銷履歷紀錄)</h1>                                                                               
            </div>
            <ClearFix height="500px"/>
        </DefaultLayout>
    );
};
export default HomePage;