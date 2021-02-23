import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import photo from '../../assets/photo6.jpg';


const DarkHeader = () => {
    const [darkDropdown, setDarkDropdown] = useState(false);  

  const handleDropdown = () => {
    let closed = !darkDropdown;
    setDarkDropdown(closed);
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: 'smooth'
    });
  }

  return (    
      <NavigationMenu darkDropdown={ darkDropdown }> 

        <PhotoSection>
          <img src={photo} alt="authors" />
        </PhotoSection>

        <LinkSection>
          <LinkContainer>

            {/* <Link to="/" onClick={handleDropdown}>
              <LogoImage />
            </Link> */}
          
              <Link to="/authors-page" onClick={handleDropdown}>
                The Authors
              </Link>

              <Link to="/books" onClick={handleDropdown}>
                Books
              </Link>
        
              <Link to="/podcasts" onClick={handleDropdown}>
                Podcast
              </Link>
          
              <Link to="/short-stories" onClick={handleDropdown}>
                Short stories
              </Link>  
          
              <Link to="/join-the-movement" onClick={handleDropdown}>
                Join the movement
              </Link>                

          </LinkContainer>
        </LinkSection>               

      </NavigationMenu>   
  );
}

// Styling navigation menu 
const NavigationMenu = styled.nav`  
  position: fixed;
  display: flex;  
  justify-content: space-evenly;
  align-items: center; 
  align-self: center; 
  background: #fff;
  transform: ${({ dropdown }) => dropdown ? 'translateY(25px)' : 'translateY(-100%)'};    
  height: 75%;     
  /* width: 100vw; */
  width: 94vw;  
  text-align: left;
  padding: 2rem;    
  top: 0;
  /* left: 0;   */
  z-index: 5;
  transition: transform 0.5s ease-in-out;
   

  @media (max-width: 768px) {
    width: 100%;  
    min-height: 100vh;
    height: auto;  
    transform: ${({ dropdown }) => dropdown ? 'translateY(0)' : 'translateY(-100%)'}; 
  }

  a {
    font-size: 1.4rem;        
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: #0D0C1D; */
    color: #000;
    text-decoration: none;
    transform-origin: 0; 
    /* transition: color 0.3s linear; */

    /* @media (max-width: 1560px) {
      font-size: 1.4rem;
    } */

    @media (max-width: 1400px) {
      font-size: 1.3rem;
      padding: 1.3rem 0;
    }

    @media (max-width: 1230px) {
      font-size: 1.2rem;
    }

    @media (max-width: 900px) {
      font-size: 1.3rem;
      padding: 1.5rem 0;
    }

    @media (max-width: 576px) {
      font-size: 1.1rem;
      /* text-align: center; */
      
    }

    &:hover {      
                
      transition: 0.5s ease-out all;
      transform: scale(1.1); 
      
    }
  }
`

const PhotoSection = styled.section`
  /* width: 30%;   */
  width: 500px;    
  display: inline-block;
  overflow: hidden;
  border-radius: 5px;

  img {
    display: block;
    width: 100%;
    /* height:300px;   */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;    
    transition: transform 0.8s;    

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }

  @media (max-width: 1400px) {
    width: 400px;;
  }

  /* @media (max-width: 1230px) {
    width: 300px;
  } */

  @media (max-width: 1100px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    display: none;
  }

`

const LinkSection = styled.section`  
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;    

  /* @media (max-width: 1230px) {
    width: 90%;
  } */

  @media (max-width: 900px) {
    width: 100%;
    display: flex;  
    flex-direction: column;     
  }

  /* @media (max-width: 576px) {
    width: 100%;  
    margin-top: 50px;    
  } */
`

const LinkContainer = styled.div`  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1560px) {
    min-width: 400px;
  } 

  @media (max-width: 1400px) {
    min-width: 350px;
  }  

  @media (max-width: 900px) {     
    text-align: left;
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    width: auto;  
    padding: 0 25px;  
  }
`

// const LogoImage = styled.img`
//     width: 30px;
//     height: 50px;
//     position: absolute;
//     top: 25px; 
//     left: 25px;
//     z-index: 10;
// `

export default DarkHeader;