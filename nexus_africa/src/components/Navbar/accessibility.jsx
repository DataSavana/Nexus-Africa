import React from "react";
import styled from "styled-components";
import AuthButton from "../AuthButton.js";

function scrollToContact(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
const AccessibilityContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const GetStartedButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-image: linear-gradient(to right, transparent 0%, #ffa500 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ffa500;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const BookDemoButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  margin-right: 7px;
  color: grey;
  font-size: 17px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid#FFA500;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ffa500;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <AuthButton text="Get Started" />
      <BookDemoButton
        onClick={() => scrollToContact("contact")}
        class="BookDemoButton"
      >
        Book a Demo
      </BookDemoButton>
    </AccessibilityContainer>
  );
}
export default GetStartedButton;
