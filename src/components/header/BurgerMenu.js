import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
import logo from "../../assets/Authxrs-logo.png";

const BurgerMenu = ({ dropdown, setDropdown }) => {
  const [navbar, setNavbar] = useState(false);

  // This method will toggle the dropdown menu ON/OFF
  const handleBurgerMenu = () => {
    let closed = !dropdown;
    setDropdown(closed);
  };

  // This method will scroll to the top of the page when clicking on the logo
  const handleLogo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setDropdown(false);
  };

  // This method will change the colour of the burger on scroll
  const changeBackground = () =>
    window.scrollY >= 727 ? setNavbar(true) : setNavbar(false) || navbar;

  window.addEventListener("scroll", changeBackground);

  return (
    <BurgerContainer>
      <Link to="/" onClick={handleLogo}>
        <LogoImage src={logo} />
      </Link>

      <StyledBurger dropdown={dropdown} onClick={handleBurgerMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Header dropdown={dropdown} setDropdown={setDropdown} />
      <Background dropdown={dropdown} setDropdown={setDropdown} />
    </BurgerContainer>
  );
};

const Background = styled.div`
  display: ${({ dropdown }) => (dropdown ? "initial" : "none")};
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
  position: fixed !important;
  background: ${({ dropdown }) => (dropdown ? "#000" : "")};
  z-index: 99 !important;
  opacity: 0.7;
  transition: 1s ease;
`;

// Burger container
const BurgerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

// Styled burger menu
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ dropdown }) =>
        dropdown ? "rotate(45deg)" : "rotate(0)"};
      background: ${({ dropdown }) =>
        window.scrollY >= 727 || dropdown ? "#000" : "#fff"};
    }

    :nth-child(2) {
      opacity: ${({ dropdown }) => (dropdown ? "0" : "1")};
      transform: ${({ dropdown }) =>
        dropdown ? "translateX(20px)" : "translateX(0)"};
      background: ${({ dropdown }) =>
        window.scrollY >= 727 || dropdown ? "#000" : "#fff"};
    }

    :nth-child(3) {
      transform: ${({ dropdown }) =>
        dropdown ? "rotate(-45deg)" : "rotate(0)"};
      background: ${({ dropdown }) =>
        window.scrollY >= 727 || dropdown ? "#000" : "#fff"};
    }
  }
`;

const LogoImage = styled.img`
  width: 70px;
  position: absolute;
  top: 35px;
  left: 5%;
  z-index: 101;
`;

export default BurgerMenu;
