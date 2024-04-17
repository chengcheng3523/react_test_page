import React from "react";
import styled, {css} from "styled-components";
import Header from "./Header";
import Footer from "./footer"

const PageHeader = styled.div`
    ${(props) =>
            props.fixed &&
            css`
                position: fixed;
            `}
`;

const DefaultLayout = ({ fixedHeader, children }) => {
    return (
        <div>
            <PageHeader fixed={fixedHeader}>
                <Header />
                
            </PageHeader>
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
