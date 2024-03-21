import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameIsFocused, setUsernameIsFocused] = useState(false); // 為 username 創建聚焦狀態
    const [passwordIsFocused, setPasswordIsFocused] = useState(false); // 為 password 創建聚焦狀態
    const [isFocused, setIsFocused] = useState(false);

    const navigate = useNavigate(); // 定義 navigate
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 在此處處理登入邏輯
        console.log(`Username: ${username}, Password: ${password}`);
        // 登入成功後跳轉到首頁
        navigate('/ItemsList');
    };

    const styles = {
        body: {
            fontFamily: 'Roboto',
            backgroundColor: '#e76f51',
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
                />
                <input
                    type="password"
                    placeholder="Password 密碼"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ ...styles.input, ...styles.passwordInput }}
                    onFocus={() => setPasswordIsFocused(true)}
                    onBlur={() => setPasswordIsFocused(false)}
                />
                <input
                    type="submit"
                    value="Submit 提交"
                    style={{ ...styles.input, ...styles.submitInput }}
                />
            </form>
        </div>
    );
};

export default Login;