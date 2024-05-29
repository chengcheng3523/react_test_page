import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Input, Form, Space } from 'antd'; // Imported Form and Space instead of individual components
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const PlanPage = () => {
    const [size] = useState('large'); 

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    return (
        <Loginlayout fixedHeader>
            <ClearFix height="100px" />
            <div>
                <h1>表1-2.生產計畫</h1>
            </div>

            <Form
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                autoComplete="off"
            >
                <Form.List name="fields">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'number']}
                                       
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input the number',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="編號" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'area']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input the area',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="面積(公頃)" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'crop']}
                                       
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input the crop',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="種植作物" />
                                    </Form.Item>

                                    {/* <Form.Item
                                        {...restField}
                                        name={[name, 'address']}
                                       
                                        rules={[{ required: true, message: 'Please input the address' }]}
                                    >
                                        <Space.Compact>
                                            <Form.Item
                                                name={['address', 'province']}
                                                noStyle
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Province is required',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="縣市" />
                                            </Form.Item>
                                            <Form.Item
                                                name={['address', 'street']}
                                                noStyle
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Street is required',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="街道" />
                                            </Form.Item>
                                        </Space.Compact>
                                    </Form.Item> */}
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}

                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    新增 農地地籍號碼
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
            <ClearFix height="500px" />
        </Loginlayout>
    );
};

export default PlanPage;
