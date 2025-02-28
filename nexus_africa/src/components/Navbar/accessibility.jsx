import React from "react";
import styled from 'styled-components';

const AccessibilityContainer = styled.div`
display: flex;
`;

const RegisterButton = styled.button`
border: 0;
outline: 0;
padding: 8px 1em;
color: white;
font-size: 14px;
font-weight: 600;
border-radius: 20px;
background-image: linear-gradient(to right, transparent 0%, #FFA500 100%);
transition: all 240ms ease-in-out;
cursor: pointer;


&:hover {
    background-color: #FFA500;
}

&:not(:last-of-type) {
margin-right: 7px;
}
`;

const LoginButton = styled.button`
border: 0;
outline: 0;
padding: 8px 1em;
color: grey;
font-size: 14px;
font-weight: 600;
border-radius: 20px;
background-color: transparent;
border: 1px solid#FFA500;
transition: all 240ms ease-in-out;
cursor: pointer;


&:hover {
    background-color: #FFA500;
}

&:not(:last-of-type) {
margin-right: 7px;
}
`;



export function Accessibility(props) {
    return (<AccessibilityContainer>
        <RegisterButton>Register</RegisterButton>
        <LoginButton>Login</LoginButton>
    </AccessibilityContainer>
    );
}