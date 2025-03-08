import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  width: 100%;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: white;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    border-top: 2px solid green;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link onClick={() => scrollToSection("about")}>About Us</Link>
        </LinkItem>
        <LinkItem>
          <Link onClick={() => scrollToSection("our-why")}>Our Why</Link>
        </LinkItem>
        <LinkItem>
          <Link onClick={() => scrollToSection("how-it-works")}>
            How It Works
          </Link>
        </LinkItem>
        <LinkItem>
          <Link onClick={() => scrollToSection("faq")}>FAQ</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
