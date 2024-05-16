import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import {   Button,   Flex,   Upload,   Input,   Card,    Form,   InputNumber,   Radio,     Image,   Space ,  Divider} from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import styles from './InfoPage.module.css'; // 导入样式文件
import axios from 'axios';
import moment from 'moment';

const InfoPage = () => {

  const onFinish = async (values) => {
    // Format the date before sending it to the server
    values['Seedling Purchase Date'] = moment(values['Seedling Purchase Date']).format('YYYY-MM-DD');
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/basicdata/post', values);
      console.log('成功發送請求，回應:', response.data);
    } catch (error) {
      console.error('發送請求失敗:', error);
    }
  };

  const on1Finish = async (values) => {
    // Format the date before sending it to the server
    values['Seedling Purchase Date'] = moment(values['Seedling Purchase Date']).format('YYYY-MM-DD');
  
    try {
      const response = await axios.post('', values);
      console.log('成功發送請求，回應:', response.data);
    } catch (error) {
      console.error('發送請求失敗:', error);
    }
  };

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  
  
  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />
      <div className={styles.card}> {/* 使用样式 */}
        <h1>表1-1.基本資料</h1>
      </div>
      <Card title="基本資料"className={styles.card}> {/* 使用样式 */}
        <Form 
          labelCol={{ span: 10 }} 
          wrapperCol={{ span: 14 }} 
          layout="horizontal" 
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">小</Radio.Button>
              <Radio.Button value="default">默認</Radio.Button>
              <Radio.Button value="large">大</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="單位代號:" name="UC">
            <Input />
          </Form.Item>
          <Form.Item label="單位名稱:" name="UN">
            <Input />
          </Form.Item>

          <Form.Item label="經營農戶姓名:"name="FarmerName">
            <Input />
          </Form.Item>

          <Form.Item label="電話:"name="ContactPhone">
            <Input />
          </Form.Item>

          <Form.Item label="行動電話:"name="MobilePhone">
            <Input />
          </Form.Item>
          
          <Form.Item label="傳真:"name="Fax">
            <Input />
          </Form.Item>

          <Form.Item label="住址:"name="Address">
            <Input />
          </Form.Item>
          {/* <Form.Item label="2吋照片上傳" name="UC" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上傳</div>
              </button>
            </Upload>
          </Form.Item> */}

          <Form.Item  name="email" label="Email" 
            rules={[
              { type: 'email', message: '請輸入有效的 E-mail 地址！' },
              { required: true, message: '請輸入 E-mail 地址！' }
            ]}
          >
            <Input />
          </Form.Item>



          <Form.Item label="編號" name="NUMBER" >
            <InputNumber />
          </Form.Item>

          <Form.Item label="農地地籍號碼" name="LandParcelNumber" >
            <InputNumber />
          </Form.Item>
          
          <Form.Item label="栽培總面積" name="TotalCultivationArea" >
            <InputNumber />單位:公頃
          </Form.Item>

          <Form.Item label="面積" name="Area" >
            <InputNumber />
          </Form.Item>

          <Form.Item label="種植作物" name="Crop" >
            <InputNumber />
          </Form.Item>

          <Form.Item label="場區代號" name="AreaCode" >
            <InputNumber />
          </Form.Item>

          <Form.Item label="場區面積" name="AreaSize" >
            <InputNumber />
          </Form.Item>

          <Form.Item label="種植作物種類、產期、預估產量(公斤)" name="CropType,HarvestPeriod,EstimatedYield" >
            <InputNumber />
          </Form.Item>

          <Form.Item label="備註" name="Notes" >
            <InputNumber />
          </Form.Item>


          <Form.Item>
          <Button type="primary" htmlType="submit">儲存</Button>
          </Form.Item>
        </Form>                         
      </Card>

      <Card  title="農地地籍號碼" name="Land Parcel Number" className={styles.card}> {/* 使用样式 */}
        <Form
         
          layout="horizontal" 
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          name="dynamic_form_nest_item"
          on1Finish={on1Finish}
          style={{ maxWidth: 600 }}
          autoComplete="off">

           <Divider orientation="left">sub-element align full</Divider>
                                            
          <Form.List name="fields">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: 'flex', marginBottom: 10 }}
                    align="baseline">
                    
                    <Form.Item
                      {...restField} name={[name, 'number']}
                      rules={[{ required: true, message: '請輸入編號' }]}>
                     
                      <Input placeholder="編號" />

                    </Form.Item>

                    <Form.Item
                      {...restField}name={[name, 'landRegistrationNumber']}
                      rules={[{ required: true, message: '請輸入農地地籍號碼' }]}>  
                      
                   
                      <Input placeholder="農地地籍號碼(縣市/鄉鎮市區/段/小段/號)"  />
                    </Form.Item>

                    <Form.Item
                      {...restField}name={[name, 'area']}
                      rules={[{ required: true, message: '請輸入面積' }]}>
                      
                      <InputNumber  placeholder="面積(公頃)" />
                    </Form.Item>

                    <Form.Item{...restField}name={[name, 'crop']}
                      rules={[{ required: true, message: '請輸入種植作物' }]}>

                    
                      <Input placeholder="種植作物" />
                    </Form.Item>
                    
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}

                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    新增農地地籍號碼
                  </Button>
                </Form.Item>

              </>
            )}

          </Form.List>
          <Form.Item>
          <Button type="primary" htmlType="submit">儲存</Button>
          </Form.Item>
        
        </Form>
      </Card>

      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default InfoPage;
