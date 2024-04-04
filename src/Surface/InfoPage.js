import React, { useState } from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Flex, Input, Card, Cascader, DatePicker, Form, InputNumber, Radio, Select, Switch, TreeSelect, Space } from 'antd';



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
        <DefaultLayout fixedHeader>           
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
        </DefaultLayout>
    );
};

export default InfoPage   ;
