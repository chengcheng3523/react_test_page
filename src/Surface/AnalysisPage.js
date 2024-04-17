
import Loginlayout from "../components/layout/Loginlayout";
import React, { useState } from 'react';

import ClearFix from "../components/common/ClearFix";
import { DatePicker, Space, Select } from 'antd';
import { Button, Flex, Input,Card } from 'antd';

const AnalysisPage    = () => {
  const [size] = useState('large'); // default is 'middle'

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    const onChangeDatePicker = (date, dateString) => {
        console.log(date, dateString);
    };
  
    // const gridStyle = {
    //     width: '25%',
    //     textAlign: 'center',
    //   };
    return (
        <Loginlayout fixedHeader>       
     
        <div>
            <h1>
                表25.各種檢驗分析表黏貼處
            </h1>
        </div>

                 
            <ClearFix height="100px"/>             
                       
            <Card  title="基本資料" >
            <Input placeholder="單位名稱"  />    
            <Input placeholder="統一編號"  />
            <Input placeholder="負責人"  />
            <Input placeholder="經營農戶姓名 Chinese name."  />            
            <Input placeholder="身分證字號 ID Number."  />
            <div>
                    <span>申請日期</span>       
                    <Space direction="vertical" size={12}>
                        <DatePicker onChange={onChangeDatePicker} needConfirm />
                    </Space>
            </div>        

            <Input placeholder="電話 Telephone."  />
            <Input placeholder="手機 Cell Phone."  />
            <Input placeholder="信箱 Email" />
            <Input placeholder="Line ID."  />
            <span>戶籍地址 Home Address</span>
            <Input placeholder="郵遞區號 Postal code"  />
            <Input placeholder="縣市 City/County"  />
            <Input placeholder="鄉鎮市區 District/Township"  />
            <Input placeholder="街牌道路 Street/Road"  />
            <span>出生地 Place of Birth</span>
            <Input placeholder="縣市 City/County" />
            <Input placeholder="鄉鎮市區 District/Township" />
            <span>住址 Mailing Address</span>        
            <Input placeholder="郵遞區號 Postal code"  />
            <Input placeholder="縣市 City/County" />
            <Input placeholder="鄉鎮市區 District/Township"  />
            <Input placeholder="街牌道路 Street/Road"  />
            </Card>  

            
            <Card type="inner" title="2吋正面照片" extra={<a href="#">More</a>}>
            <Input placeholder="顯示圖片"  />             
            </Card>           

            <Card title="農地地籍號碼">
            <Flex vertical gap={10}>                
                
                <Input placeholder="田區代號" variant="filled" />
                <Input placeholder="作物" variant="filled" />
                <Input placeholder="資材代碼或資材名稱" variant="filled" />
                <div>
                    <span>縣市 City/County</span>
                    {/* <InputNumber min={1} max={10} defaultValue={3} /> */}
                    <Space wrap>
                        <Select
                            defaultValue="台北市"
                            options={[
                                { value: '基隆市', label: '基隆市' },
                                { value: '臺北市', label: '臺北市' },
                                { value: '新北市', label: '新北市' }, 
                                { value: '新竹市', label: '新竹市' },
                                { value: '新竹縣', label: '新竹縣' },
                                { value: '宜蘭縣', label: '宜蘭縣' },
                                { value: '臺中市', label: '臺中市' },
                                { value: '苗栗縣', label: '苗栗縣' }, 
                                { value: '彰化縣', label: '彰化縣' },
                                { value: '南投縣', label: '南投縣' },
                                { value: '雲林縣', label: '雲林縣' },
                                { value: '高雄市', label: '高雄市' },
                                { value: '臺南市', label: '臺南市' },
                                { value: '嘉義市', label: '嘉義市' },
                                { value: '嘉義縣', label: '嘉義縣' },
                                { value: '屏東縣', label: '屏東縣' },
                                { value: '澎湖縣', label: '澎湖縣' },
                                { value: '花蓮縣', label: '花蓮縣' },
                                { value: '臺東縣', label: '臺東縣' },
                                { value: '金門縣', label: '金門縣' },
                                { value: '連江縣', label: '連江縣' },
                                
                            ]}
                        />
                    </Space>
                </div>
                <Input placeholder="操作人員" variant="filled" />
                <Input placeholder="供應商" variant="filled" />         
                <Input placeholder="備註(例如:用途、使用方法等)"  variant="filled" />                
            </Flex>
            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small" wrap="wrap">          
                    <Button size={size}>储存</Button>          
                </Flex>        
            </Flex>
            </Card>



            <ClearFix height="500px"/>
        


        </Loginlayout>
       
    );

}
export default AnalysisPage   ; 



  





