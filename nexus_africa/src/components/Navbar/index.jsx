<<<<<<< HEAD
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
=======
import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { NavLinks } from "./navLinks";
import { Accessibility } from "./accessibility";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  width: 100%;
  height: 75px;
  box-shadow: 0 1px 3px hsla(0, 21.1%, 86.1%, 0.13);
  display: flex;
  align-items: center;
  padding: 7 1em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
>>>>>>> 38085cf0af48f6440c86c35378837a93f5a0e372
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo></Logo>
      </LeftSection>
<<<<<<< HEAD
      <MiddleSection>
        {!isMobile && <NavLinks />}
      </MiddleSection>
=======
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
>>>>>>> 38085cf0af48f6440c86c35378837a93f5a0e372
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
<<<<<<< HEAD

export default Navbar;
=======
>>>>>>> 38085cf0af48f6440c86c35378837a93f5a0e372
