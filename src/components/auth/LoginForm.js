import React ,{ useState, useContext, useEffect } from'react';
import {Button, Input, message} from 'antd';
import {UserOutlined,LockOutlined} from "@ant-design/icons"
import AuthContext from '../auth/AuthContext';
// import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  // const history = useHistory();
  const { login, isAuthenticated } = useContext(AuthContext);
  const [username, setUsername]= useState("")
  const [password, setPassword]= useState("")
  const handleLogin = () => {
    // call login api
    // console.log('handle login');
    // login(username, password).then(() => console.log("/"));
    // login(username, password).then(() => console.log('login success'));
    login(username, password).then(({token,error}) => {
        if (!token) {
          message.error(error);
        }
    });
  };

// // useEffect判斷登入狀況，自動跳轉
//   useEffect(() =>{ 
//      isAuthenticated && history.push("/");
//   }, [isAuthenticated]);

useEffect(() => {
  if (isAuthenticated) {
    window.location.href = "/"; 
  }
}, [isAuthenticated]);

  return (
    <div>
      <Input 
      className="mb-3" 
      size="large" 
      placeholder="請輸入帳號"
      prefix={<UserOutlined />}
      style={{ borderRadius: '0px' }} // 設置直角邊框
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <Input 
      className="mb-3" 
      type="password"
      size="large" 
      placeholder="請輸入密碼" 
      prefix={<LockOutlined />}
      style={{ borderRadius: '0px' }} // 設置直角邊框
      value={password}
      onChange={(e) => setPassword(e.target.value)}  // 設置
      />
      <Button onClick={handleLogin} style={{ borderRadius: '0px', fontWeight: 'bold' }}>登入</Button> 

    </div>
  );
};

export default LoginForm;