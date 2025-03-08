import React from 'react';
import styled from 'styled-components';
import { Logo } from "../logo"
import { NavLinks } from './navLinks';
import { Accessibility } from './accessibility';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../responsive';
import { MobileNavLinks } from './mobileNavLinks';


const NavbarContainer = styled.div`
  width: 95%;
  height: 75px;
  box-shadow: 0 1px 3px hsla(0, 21.10%, 86.10%, 0.13);
  display: flex;
  align-items:center;
  padding:7 1.0em;
`;

const LeftSection = styled.div`
display:flex;
`;

const MiddleSection = styled.div`
display:flex;
flex: 2;
height: 100%;
justify-content: center;
`;

const RightSection = styled.div`
display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo></Logo>
      </LeftSection>
      <MiddleSection>
        {!isMobile && <NavLinks />}
      </MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}

export default Navbar;