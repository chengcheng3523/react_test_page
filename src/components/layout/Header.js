import React from "react";
import Styled from "styled-components";

const  StyledHeader = Styled.header`
    background-color: #d1011c;
    width: 100vw;
    height: 200px;
`;

const Header = ()=> {
    return <StyledHeader>This is fixed header</StyledHeader>;};

export default Header;