import React from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import {useState} from "react";
import { Accessibility } from "./accessibility";

const NavLinksContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: top;
justify-content: center;
background-color:black;
`;

const LinksWrapper = styled.ul`
margin: 0;
padding:0;
display:flex;
height: 30%;
list-style: none;
justify-content:center;
align-items: center;
background-color: black;
width: 100%;
flex-direction: column;
position:fixed;
top:65px;
left: 0;
`;

const LinkItem = styled.li`
width: 100%;
padding: 0 1.1em;
color: white;
display: flex;
flex-direction:column;
justify-content: center;
font-weight: 500;
font-size: 16px;
border-top: 2px solid transparent;
transition: all 200ms ease-in-out;


&:hover{
    border-top: 2px solid green;
}
`;

const Link = styled.a`
text-decoration: none;
color: inherit;
font-size: inherit;
`;

const Marginer = styled.div`
height: 1em;
`;

export function MobileNavLinks(props) {
const [isOpen, setOpen] = useState(false);
    return (
    <NavLinksContainer>
        <MenuToggle isOpen = {isOpen} toggle = {() => setOpen(!isOpen)} />
        {isOpen && <LinksWrapper>
            <LinkItem><Link href="#">About Us</Link></LinkItem>
            <LinkItem><Link href="#">Our Why</Link></LinkItem>
            <LinkItem><Link href="#">How It Works</Link></LinkItem>
            <LinkItem><Link href="#">FAQ</Link></LinkItem>
            <Marginer/>
            <Accessibility/>
        </LinksWrapper>}
    </NavLinksContainer>
    );
} 
