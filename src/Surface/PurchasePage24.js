import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Flex, Input, Card, Cascader, DatePicker, Form, InputNumber, Radio, Select, Switch, TreeSelect, Space } from 'antd';



const PurchasePage24=() => {
    const [size] = useState('large'); // default is 'middle'

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    const onChangeDatePicker = (date, dateString) => {
        console.log(date, dateString);
    };

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };


    return (
        <Loginlayout fixedHeader>           
            <ClearFix height="100px"/>             
            <div>
            <h1>
		   表24.資材採購單據黏貼處
            </h1>
            </div>           

            <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default PurchasePage24;
