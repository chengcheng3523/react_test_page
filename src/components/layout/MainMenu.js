import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MainMenu = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
         
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/about">關於我們</Link></li>
                <li><Link to="/contact">聯絡我們</Link></li>
                {/* 添加更多的選單項目 */}
            </ul>
        </nav>
    );
};

export default MainMenu;