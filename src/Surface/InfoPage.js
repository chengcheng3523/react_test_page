import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import {   Button,   Flex,   Upload,   Input,   Card,    Form,   InputNumber,   Radio,     Image,   Space ,  Divider} from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import styles from './InfoPage.module.css'; // 导入样式文件


const InfoPage = () => {
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

  const onFinish = (values) => {
    console.log('Received values of form:', values);
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
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">小</Radio.Button>
              <Radio.Button value="default">默認</Radio.Button>
              <Radio.Button value="large">大</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="單位名稱:">
            <Input />
          </Form.Item>

          <Form.Item label="經營農戶姓名:">
            <Input />
          </Form.Item>

          <Form.Item label="電話:">
            <Input />
          </Form.Item>

          <Form.Item label="行動電話:">
            <Input />
          </Form.Item>
          
          <Form.Item label="傳真:">
            <Input />
          </Form.Item>

          <Form.Item label="2吋照片上傳" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上傳</div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item 
            name="email" 
            label="E-mail" 
            rules={[
              { type: 'email', message: '請輸入有效的 E-mail 地址！' },
              { required: true, message: '請輸入 E-mail 地址！' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="栽培總面積">
            <InputNumber />單位:公頃
          </Form.Item>
            
        </Form>                         
      </Card>

      <Card  title="農地地籍號碼"className={styles.card}> {/* 使用样式 */}
        <Form
         
          layout="horizontal" 
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          name="dynamic_form_nest_item"
          onFinish={onFinish}
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
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        
        </Form>
      </Card>

      <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default InfoPage;
