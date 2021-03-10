import React, { useState } from "react";
import OurPartners from "./OurPartners";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import OurVision from "./OurVision";
import styled from "styled-components";
import team from "../../assets/group.png";
import partner from "../../assets/partner.png";
import vision from "../../assets/eye.png";
import story from "../../assets/book.png";
import DarkBurger from "../header/DarkBurger";

export default function AboutUs() {
  const [OurPartnersDiv, setOurPartners] = useState(false);
  const [OurTeamDiv, setOurTeam] = useState(true);
  const [OurStoryDiv, setOurStory] = useState(false);
  const [OurVisionDiv, setOurVision] = useState(false);

  function openPartners() {
    setOurPartners(true);
    setOurTeam(false);
    setOurStory(false);
    setOurVision(false);
  }
  function openTeam() {
    setOurTeam(true);
    setOurPartners(false);
    setOurStory(false);
    setOurVision(false);
  }
  function openStory() {
    setOurStory(true);
    setOurPartners(false);
    setOurTeam(false);
    setOurVision(false);
  }
  function openVision() {
    setOurStory(false);
    setOurPartners(false);
    setOurTeam(false);
    setOurVision(true);
  }

  return (
    <div>
      <DarkBurger />
      <Navbar>
        <ButtonContainer>
          <img src={team} onClick={openTeam} alt="team" />
          <button onClick={openTeam}>The Team</button>
        </ButtonContainer>
        <ButtonContainer>
          <img src={partner} onClick={openPartners} alt="partners" />
          <button onClick={openPartners}>Partners</button>
        </ButtonContainer>
        <ButtonContainer>
          <img src={story} onClick={openStory} alt="story" />
          <button onClick={openStory}>Our Story</button>
        </ButtonContainer>
        <ButtonContainer>
          <img src={vision} onClick={openVision} alt="vision" />
          <button onClick={openVision}>Vision</button>
        </ButtonContainer>
      </Navbar>
      <AboutUsSection>
        {OurTeamDiv && (
          <>
            <OurTeam />
          </>
        )}
        {OurPartnersDiv && (
          <>
            <OurPartners />
          </>
        )}
        {OurStoryDiv && (
          <>
            <OurStory />
          </>
        )}
        {OurVisionDiv && (
          <>
            <OurVision />
          </>
        )}
      </AboutUsSection>
    </div>
  );
}

const Navbar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightgray;
  height: 120px auto;
  margin-top: 140px;

  button {
    border: 0;
    background-color: transparent;
    width: 200px;
    outline: none;
    font-size: 22px;
    font-weight: 100;

    @media (max-width: 400px) {
      font-size: 17px;
    }
  }

  button:active {
    border-bottom: 1px solid black;
  }
`;

const AboutUsSection = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  img {
    width: 50px;
    margin: 10px;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 130px;
    padding: 10px;

    img {
      width: 40px;
      margin: 10px;
    }
  }
`;
