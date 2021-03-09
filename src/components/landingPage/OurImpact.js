import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import author1 from '../../assets/author8.jpeg';
import author2 from '../../assets/authors4.jpg';

export default function OurImpact() {
  return (
    <AboutUsSection>
      <MainHeading>
        <Link 
          to="/about-us" 
          style={{ textDecoration: "none", color: "inherit" }} 
        >
          <h3>Who We Are</h3>
        </Link>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words.
        </p>
      </MainHeading>

      <OurImpactSection>
        <HowWeWork>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4>How we work</h4>
          </Link>          
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </p>
        </HowWeWork>
        <HowWeWorkPhoto>
          <img src={author2} alt="pen" />
        </HowWeWorkPhoto>
      </OurImpactSection>

      <OurValuesSection>
        <TellYourStory>
          <Link to="/tell-your-story" style={{ color: "inherit" }}>
            <h4>Tell your story here</h4>
          </Link>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </p>
        </TellYourStory>
        <TellYourStoryPhoto>
          <img src={author1} alt="pen" />
        </TellYourStoryPhoto>
      </OurValuesSection>
    </AboutUsSection>
  );
}

const AboutUsSection = styled.section`
  min-height: 100vh;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration:none;
`;

const MainHeading = styled.div`
  margin: 100px 0;
  width: 60%;

  h3 {
    font-size: 1.8rem;
    width: 165px;
    border-bottom: 4px solid black;
    margin: 10px auto;    
    text-decoration:none;
    color:black;
    outline:0;
  }

  h3:hover {
    z-index:1;
    transform:scale(1.1);
    transition: .4s;
    cursor: pointer;
    color:black;
    outline:none;
    text-decoration:none;
  }

  h3:focus, h3:hover, h3:visited, h3:link, h3:active {
        text-decoration: none;
        outline:none;
    }

  p {
    font-size: 1rem;
    margin: 50px auto;
  }

  @media (max-width: 1000px) {
    width: 80%;
    align-self: center;
    margin: 50px 0;
  }
`;

const OurImpactSection = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;  

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const HowWeWork = styled.section`  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding: 0 25px;
    text-align: center;    

    text-decoration: underline;
    &:hover {
      cursor: pointer;
      transition: transform 0.5s;
      transform: scale(1.05);
    }
  }

  p {
    font-size: 1rem;
    padding: 0 10%;
  }
`;

const HowWeWorkPhoto = styled.div`  
  width: 100%;
  display: inline-block;
  overflow: hidden;
  margin-left: 10%;  

  img {    
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

  @media (max-width: 1000px) {
    width: 80%;
    align-self: center;
    margin: 50px 0;
  }
`;

const OurValuesSection = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;  

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TellYourStory = styled.section`  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  

  h4 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding: 0 25px;
    text-align: center;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
      transition: transform 0.5s;
      transform: scale(1.05);
    }
  }

  p {
    font-size: 1rem;
    padding: 0 10%;
  }
`;

const TellYourStoryPhoto = styled.div`  
  width: 100%;
  display: inline-block;
  overflow: hidden;
  margin-right: 10%;  

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

  @media (max-width: 1000px) {
    width: 80%;
    align-self: center;
    margin: 50px 0;
  }
`;
