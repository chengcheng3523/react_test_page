import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Flex, Input, Card, Cascader, DatePicker, Form, InputNumber, Radio, Select, Switch, Image , Space } from 'antd';




const InfoPage    = () => {
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
                表1-1.基本資料
            </h1>
            </div>           
            <Card title="基本資料">

            <Form labelCol={{span: 4,}}
                  wrapperCol={{span: 14,}}
                  layout="horizontal"
                  initialValues={{size: componentSize,}}
                  onValuesChange={onFormLayoutChange}
                  size={componentSize}
                  style={{maxWidth: 600,}}>
        
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>

            <Form.Item label="單位名稱:">
            <Input />
            </Form.Item>

            <Form.Item label="統一編號:">
            <Input />
            </Form.Item>

            <Form.Item label="負責人:">
            <Input />
            </Form.Item>

            <Form.Item label="經營農戶姓名:">
            <Input />
            </Form.Item>

            <Form.Item label="身分證字號:">
            <Input />
            </Form.Item>

            <Form.Item label="申請日期:">
            <DatePicker onChange={onChangeDatePicker}  />
            </Form.Item>

                 
            <Form.Item label="輸入框">
            <Input />
            </Form.Item>

            <Form.Item label="選擇下拉單">
            <Select>
            <Select.Option value="選擇">Demo</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item label="日期">
                <DatePicker />
            </Form.Item>
            <Form.Item label="數字">
                <InputNumber />
            </Form.Item>
            <Form.Item label="電話 Telephone.:">
            <Input />
            </Form.Item>
            
            <Form.Item label="手機 Cell Phone.:">
            <Input />
            </Form.Item>

            <Form.Item label="信箱 Email:">
            <Input />
            </Form.Item>

            <Form.Item label="Line ID.:">
            <Input />
            </Form.Item>
           


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
            
            </Form>
            </Card>
            
            <Card type="inner" title="2吋正面照片" extra={<a href="#">More</a>}>
            <Input placeholder="顯示圖片"  />   
            <Image
    width={200}
    height={200}
    src="error"
    fallback="data:image/png;base64,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"
  />
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
};

export default InfoPage   ;
