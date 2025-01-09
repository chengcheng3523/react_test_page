import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";

const Login = () => {
    const navigate = useNavigate();
    const { login, isAuthenticated } = useContext(AuthContext);
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const handleLogin = () => {
      // call login api
      console.log('handle login');
      login(username, password).then(() => {navigate("/")});
    };
  // useEffect判斷登入狀況，自動跳轉
    useEffect(() =>{
      if(isAuthenticated ){ // 確保只有在沒有錯誤時才跳轉
        navigate("/");
      }
    },[isAuthenticated, navigate]);

    const styles = {
        body: {
            fontFamily: 'Roboto',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // 使 App 組件填滿整個視窗
            width: '100vw', // 使 App 組件填滿整個視窗
        },
        login: {
            backgroundColor: '#0b132b',
            width: '400px',
            color: '#f8f9fa',
            padding: '40px',
            boxShadow: '10px 10px 25px #00000080',
            textAlign: 'center',
        },
        input: {
            display: 'block',
            margin: '20px auto',
            textAlign: 'center',
            background: 'none',
            padding: '12px',
            fontSize: '15px',
            borderRadius: '22px',
            outline: 'none',
            color: '#f8f9fa',
        },
        usernameInput: {
            border: usernameIsFocused ? '2px solid #2ecc71' : '2px solid #3498db',
            width: usernameIsFocused ? '280px' : '220px',
            transition: '0.5s',
        },
        passwordInput: {
            border: passwordIsFocused ? '2px solid #2ecc71' : '2px solid #3498db',
            width: passwordIsFocused ? '280px' : '220px',
            transition: '0.5s',
        },
        textInput: {
            border: isFocused ? '2px solid #2ecc71' : '2px solid #3498db',
            width: isFocused ? '280px' : '220px',
            transition: '0.5s',
        },
        submitInput: {
            width: '150px',
            border: '2px solid #2ecc71',
            cursor: 'pointer',
            backgroundColor: '#2ecc71',
            transition: '0.5s',
        },
    };

    return (
        <DefaultLayout fixedHeader> 
        <ClearFix height="90px"/>
        <div style={styles.body}>
                  
            
            <form onSubmit={handleSubmit} style={styles.login}>
            <h1>Login 登入</h1>
                <input
                    type="text"
                    placeholder="Username 帳號"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{ ...styles.input, ...styles.usernameInput }}
                    onFocus={() => setUsernameIsFocused(true)}
                    onBlur={() => setUsernameIsFocused(false)}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password 密碼"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ ...styles.input, ...styles.passwordInput }}
                    onFocus={() => setPasswordIsFocused(true)}
                    onBlur={() => setPasswordIsFocused(false)}
                    onChange={(e) => setPassword(e.target.value)}  // 設置
                />
                
                <input
                    type="submit"
                    value="Submit 提交"
                    style={{ ...styles.input, ...styles.submitInput }}
                    onClick={handleLogin}
                />
            </form>
        </div>
        </DefaultLayout>

    );
};

export default Login;