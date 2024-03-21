import React from "react";
import Styled from "styled-components";
import MainMenu from './MainMenu'; // 引用 MainMenu 組件

const StyledHeader = Styled.header`
    background-color: #d1011c;
    width: 100vw;
    height: 200px;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>This is fixed header</StyledHeader>
            <MainMenu /> {/* 添加 MainMenu 組件 */}
        </>
    );
};

export default Header;