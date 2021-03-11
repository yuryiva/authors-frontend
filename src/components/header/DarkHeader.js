import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "../../assets/photo6.jpg";

const DarkHeader = ({ darkDropdown, setDarkDropdown }) => {
  const handleDarkDropdown = () => {
    let closed = !darkDropdown;
    setDarkDropdown(closed);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <DarkNavigationMenu darkDropdown={darkDropdown}>
      <DarkPhotoSection>
        <img src={photo} alt="authors" />
      </DarkPhotoSection>

      <DarkLinkSection>
        <DarkLinkContainer>
          <Link to="/authors-page" onClick={handleDarkDropdown}>
            The Authors
          </Link>

          <Link to="/books" onClick={handleDarkDropdown}>
            Books
          </Link>

          <Link to="/podcasts" onClick={handleDarkDropdown}>
            Podcast
          </Link>

          <Link to="/short-stories" onClick={handleDarkDropdown}>
            Short stories
          </Link>

          <Link to="/about-us" onClick={handleDarkDropdown}>
            About Us
          </Link>

          {/* <Link to="/join-the-movement" onClick={handleDarkDropdown}>
            Join the movement
          </Link> */}
        </DarkLinkContainer>
      </DarkLinkSection>
    </DarkNavigationMenu>
  );
};

// Styling navigation menu
const DarkNavigationMenu = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  background: #fff;
  transform: ${({ darkDropdown }) =>
    darkDropdown ? "translateY(25px)" : "translateY(-100%)"};
  height: 75%;
  width: 94vw;
  text-align: left;
  padding: 2rem;
  top: 0;
  z-index: 100;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    transform: ${({ darkDropdown }) =>
      darkDropdown ? "translateY(0)" : "translateY(-100%)"};
  }

  a {
    font-size: 1.4rem;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000;
    text-decoration: none;
    transform-origin: 0;

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
    }

    &:hover {
      transition: 0.5s ease-out all;
      transform: scale(1.1);
    }
  }
`;

const DarkPhotoSection = styled.section`
  width: 500px;
  display: inline-block;
  overflow: hidden;
  border-radius: 5px;

  img {
    display: block;
    width: 100%;
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
    width: 400px;
  }

  @media (max-width: 1100px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const DarkLinkSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const DarkLinkContainer = styled.div`
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
`;

export default DarkHeader;
