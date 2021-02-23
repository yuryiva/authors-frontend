import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DarkBurger = () => {
    const [booksDropdown, setbooksDropdown] = useState(false);

    // This method will toggle the dropdown menu ON/OFF
    const handleBooksBurger = () => {
        let closed = !booksDropdown;
        setbooksDropdown(closed);    
    }
  
    // This method will scroll to the top of the page when clicking on the logo
    const handleBooksLogo = () => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });    
        setbooksDropdown(false);
    }

    return (
        <BooksBurgerWrapper>      
          <Link to="/" onClick={handleBooksLogo}>
            <BookLogo />
          </Link>

          <BooksBurger 
            dropdown={booksDropdown} 
            onClick={handleBooksBurger}
          >
              <div />
              <div />
              <div />
          </BooksBurger>              
      </BooksBurgerWrapper>
    )
};

// Burger container
const BooksBurgerWrapper = styled.div`
  position: fixed;  
  width: 100%;
  height: 140px;
  display: flex; 
  justify-content: center;
  align-items: center; 
  z-index: 105;
`

// Styled burger menu
const BooksBurger = styled.button` 
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
  /* color: #000; */

  &:focus {
    outline: none;
  }

  /* @media (max-width: 768px) {
      width: 100%;      
  } */

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
      /* background: ${({ dropdown }) => window.scrollY >= 727 || dropdown ? '#000' : '#fff'};       */
    }

    :nth-child(2) {
      opacity: ${({ dropdown }) => dropdown ? '0' : '1'};
      transform: ${({ dropdown }) => dropdown ? 'translateX(20px)' : 'translateX(0)'};      
      /* background: ${({ dropdown }) => window.scrollY >= 727 || dropdown ? '#000' : '#fff'};       */
    }

    :nth-child(3) {
      transform: ${({ dropdown }) => dropdown ? 'rotate(-45deg)' : 'rotate(0)'};      
      /* background: ${({ dropdown }) => window.scrollY >= 727 || dropdown ? '#000' : '#fff'};      */
    }
  }
`

const BookLogo = styled.img`
  width: 30px;
  height: 50px;
  position: absolute;  
  top: 45px;   
  left: 5%;  
`

export default DarkBurger;





