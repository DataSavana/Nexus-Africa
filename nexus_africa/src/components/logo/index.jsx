import React from "react";
import styled from 'styled-components';
import logoImg from "./logoImg.png";

 const LogoWrapper = styled.div`
 display:flex;
 align-items: center;
 `;

 const LogoImg = styled.div`
 width:100px;
 height:100px;
 margin-top: 15px;
 margin-left: 15px;

 img {
    width: 100%;
    height: 100%;
}
`;

const LogoText = styled.h2`
font-size: 24px;
// margin: 0;
// margin-left: 0px;
color:rgba(255,255, 255, 1);
font-weight: 1000;
`;

export function Logo(props) {
    return <LogoWrapper>
        <LogoImg><img src = {logoImg} alt= "NexusAfrica logo"/></LogoImg>
        <LogoText>Nexus Africa</LogoText>
        </LogoWrapper>
}
