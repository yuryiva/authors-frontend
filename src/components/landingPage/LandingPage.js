import React from "react";
import StoriesShortcut from "./StoriesShortcut";
import Instagram from "./Instagram";
import JoinTheMovement from "./Movement";
import OurImpact from "./OurImpact";
import styled from "styled-components";
import Banner from "../banner/Banner";
// import Journey from './Journey';

export default function LandingPage() {
  return (
    <MainWrapper>
      <Banner />
      <OurImpact />
      {/* <Journey /> */}
      <StoriesShortcut />
      <JoinTheMovement />
      <Instagram />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
