import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DarkHeader from "./DarkHeader";
import logo from '../../assets/Authxrs-logo.png';

const DarkBurger = () => {
    const [darkDropdown, setDarkDropdown] = useState(false);

    // This method will toggle the dropdown menu ON/OFF
    const handleDarkBurgerStyle = () => {
        let closed = !darkDropdown;
        setDarkDropdown(closed);    
    }
  
    // This method will scroll to the top of the page when clicking on the logo
    const handleDarkLogo = () => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });    
        setDarkDropdown(false);
    }

    return (
        <DarkBurgerWrapper>      
          <Link to="/" onClick={handleDarkLogo}>
            <DarkLogo src={logo} />
          </Link>

          <DarkBurgerStyle 
            dropdown={darkDropdown} 
            onClick={handleDarkBurgerStyle}
          >
              <div />
              <div />
              <div />
          </DarkBurgerStyle>  
          <DarkHeader darkDropdown={darkDropdown} setDarkDropdown={setDarkDropdown} />   
          <DarkBackground darkDropdown={darkDropdown} setDarkDropdown={setDarkDropdown} />         
      </DarkBurgerWrapper>
    )
};

const DarkBackground = styled.div`
  display: ${({ darkDropdown }) => darkDropdown ? 'initial' : 'none' };
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;  
  left: 0 !important;
  position: fixed !important;  
  background: ${({ darkDropdown }) => darkDropdown ? '#000' : ''};  
  z-index: 99 !important;
  opacity: 0.7; 
  transition: 1s ease;
`

// Burger container
const DarkBurgerWrapper = styled.div`
  position: fixed;  
  width: 100%;
  height: 140px;
  display: flex; 
  justify-content: center;
  align-items: center; 
  z-index: 105;
`

// Styled burger menu
const DarkBurgerStyle = styled.button` 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 105;  

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
    background-color: #000;
    

    :first-child {
      transform: ${({ dropdown }) => dropdown ? 'rotate(45deg)' : 'rotate(0)'};      
    }

    :nth-child(2) {
      opacity: ${({ dropdown }) => dropdown ? '0' : '1'};
      transform: ${({ dropdown }) => dropdown ? 'translateX(20px)' : 'translateX(0)'};      
    }

    :nth-child(3) {
      transform: ${({ dropdown }) => dropdown ? 'rotate(-45deg)' : 'rotate(0)'};        
    }
  }
`

const DarkLogo = styled.img`
  width: 70px;  
  position: absolute;  
  top: 35px;      
  left: 5%;
  z-index: 105;  
`

export default DarkBurger;





