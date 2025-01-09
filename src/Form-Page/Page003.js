import React, {useState, useEffect} from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button,  Form, Input, Select, Table, message,DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';

const Page003 = () => {

  const [form] = Form.useForm(); // 綁定表單
  const [data, setData] = useState([]); // 保存數據到狀態，定義 value 狀態
  const [loading, setLoading] = useState(false); // 控制提交按鈕的加載狀態

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/records03/get');
      console.log(response.data); // 打印資料確認結構
      setData(response.data);
      if (Array.isArray(response.data)) {
        const transformedData = response.data.map(item => ({
          id: item[0],
          OperationDate: item[1],
          FieldCode: item[2],
          Crop: item[3],
          CropContent: item[4],
          WorkItemCode: item[5]
        }));
        setData(transformedData);
      } else {
        message.error('伺服器返回錯誤，請稍後重試！');
      }
      // console.log('Transformed data:', transformedData); // 確認轉換後的數據 
      // setData(transformedData); // 更新狀態
    } catch (error) {
      console.error('獲取數據失敗:', error);
      message.error('無法載入數據，請檢查您的伺服器或網絡連接！');
    }
  };

  useEffect(() => {
    console.log('Data to be displayed:', data);
    console.log('Fetching data...');
    fetchData(); // 組件加載時獲取數據
  }, [data]);

  const onFinish = async (values) => {
    setLoading(true); // 開啟加載狀態
    try {
        // 格式化日期為 MySQL 支持的格式
        if (values.OperationDate) {
          values.OperationDate = moment(values.OperationDate).format('YYYY-MM-DD HH:mm:ss');
        }
      const response = await axios.post('http://localhost:5000/api/records03/post', values);
      setData(response.data); // 更新表格數據
      form.resetFields(); // 清空表單
      message.success('成功儲存資料！'); // 成功提示
      console.log('成功發送請求，回應:', response.data);
    } catch (error) {
      console.error('發送請求失敗:', error);
      message.error('儲存失敗，請稍後重試！'); // 錯誤提示
    } finally {
      setLoading(false); // 關閉加載狀態
    }
  };
  
  // 定義表格的欄位
  const columns = [
    { title: '作業日期', dataIndex: 'OperationDate', key: 'OperationDate', render: (text) => moment(text).format('YYYY-MM-DD') },
    { title: '田區代號', dataIndex: 'FieldCode', key: 'FieldCode' },
    { title: '作物', dataIndex: 'Crop', key: 'Crop' },
    { title: '作業內容', dataIndex: 'CropContent', key: 'CropContent' },
    { title: '備註', dataIndex: 'WorkItemCode', key: 'WorkItemCode' },
  ];
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Loginlayout fixedHeader>
      <ClearFix height="100px" />
      <div>
        <h1>表3.栽培工作紀錄</h1>
      </div>
          <Form
            form={form} // 綁定表單實例
            labelCol={{ span: 10}}
            wrapperCol={{ span: 14 }}   
            style={{ maxWidth: 600 }}
            onFinish={onFinish} // 添加此行post
            disabled={loading} // 禁用表单
          >
             <Form.Item label="作業日期:"  name="OperationDate"  rules={[{ required: true, message: '請輸入作業日期！' }]}>
             <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="田區代號 :"  name="FieldCode" rules={[{ required: true, message: '請輸入田區代號！' }]}>
            <Input />
            </Form.Item>
            <Form.Item label="作物:" name="Crop" rules={[{ required: true, message: '請輸入作物名稱！' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="作業內容(可填寫代碼):" name="CropContent"  rules={[{ required: true, message: '請選擇作業內容！' }]}>
              <Select>
                <Select.Option value="(1-1) 整地">(1-1) 整地</Select.Option>
                <Select.Option value="(1-2) 作畦">(1-2) 作畦</Select.Option>
                <Select.Option value="(1-3) 配置灌溉/澆水管線">(1-3) 配置灌溉/澆水管線</Select.Option>
                <Select.Option value="(1-4) 土壤改良">(1-4) 土壤改良</Select.Option>
                <Select.Option value="(1-5) 土壤消毒">(1-5) 土壤消毒</Select.Option>
                <Select.Option value="(1-6) 設施操作">(1-6) 設施操作</Select.Option>
                <Select.Option value="(1-8) 遮蔭網">(1-8) 遮蔭網</Select.Option>
                <Select.Option value="(2-1) 介質消毒">(2-1) 介質消毒</Select.Option>
                <Select.Option value="(2-2) 裝袋作業">(2-2) 裝袋作業</Select.Option>
                <Select.Option value="(2-3) 上架">(2-3) 上架</Select.Option>
                <Select.Option value="(2-4) 介質調配">(2-4) 介質調配</Select.Option>
                <Select.Option value="(2-5) 養液配置">(2-5) 養液配置</Select.Option>  
                <Select.Option value="(3-1) 播種">(3-1) 播種</Select.Option>
                <Select.Option value="(3-2) 育苗">(3-2) 育苗</Select.Option>
                <Select.Option value="(3-3) 定植(移植)">(3-3) 定植(移植)</Select.Option>
                <Select.Option value="(3-4) 播種前種子處理">(3-4) 播種前種子處理</Select.Option>
                <Select.Option value="(4-1) 中耕">(4-1) 中耕</Select.Option>
                <Select.Option value="(4-2) 灌溉/澆水">(4-2) 灌溉/澆水</Select.Option>
                <Select.Option value="(4-3) 培土">(4-3) 培土</Select.Option>
                <Select.Option value="(4-4) 摘葉">(4-4) 摘葉</Select.Option>
                <Select.Option value="(4-5) 缺株補植">(4-5) 缺株補植</Select.Option>
                <Select.Option value="(4-6) 整蔓">(4-6) 整蔓</Select.Option>
                <Select.Option value="(4-7) 授粉">(4-7) 授粉</Select.Option>
                <Select.Option value="(4-8) 套袋">(4-8) 套袋</Select.Option>
                <Select.Option value="(4-9) 立支柱">(4-9) 立支柱</Select.Option>
                <Select.Option value="(5-1) 基肥">(5-1) 基肥</Select.Option>
                <Select.Option value="(5-2) 追肥">(5-2) 追肥</Select.Option>
                <Select.Option value="(5-3) 液肥">(5-3) 液肥</Select.Option>
                <Select.Option value="(6-1) 施用防治資材">(6-1) 施用防治資材</Select.Option>
                <Select.Option value="(6-2) 栽培防治">(6-2) 栽培防治</Select.Option>
                <Select.Option value="(6-3) 物理防治">(6-3) 物理防治</Select.Option>
                <Select.Option value="(6-4) 生物防治">(6-4) 生物防治</Select.Option>
                <Select.Option value="(6-5) 忌避作物">(6-5) 忌避作物</Select.Option>
                <Select.Option value="(6-6) 人工除草">(6-6) 人工除草</Select.Option>
                <Select.Option value="(6-7) 覆蓋">(6-7) 覆蓋</Select.Option>
                <Select.Option value="(6-8) 機械中耕">(6-8) 機械中耕</Select.Option>
                <Select.Option value="(7-1) 採收">(7-1) 採收</Select.Option>
                <Select.Option value="(7-2) 產季結束">(7-2) 產季結束</Select.Option>
                <Select.Option value="8. 其他">8. 其他</Select.Option>
              </Select>
            </Form.Item > 
            <Form.Item label="備註作業內容：(選填)" name="WorkItemCode">
             <Input.TextArea />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={loading}>儲存</Button>
          </Form>
          <ClearFix height="50px" />
          {/* 表格顯示 */}
          <Table
            dataSource={Array.isArray(data) ? data : []}
            columns={columns}
            rowKey={(record) => record.id || record.FieldCode} // 如果沒有 id，使用 index
            locale={{ emptyText: '暫無數據' }}
            pagination={{ pageSize: 10 }} // 每页显示 10 条
          />
          <ClearFix height="500px" />
    </Loginlayout>
  );
};

export default Page003;
