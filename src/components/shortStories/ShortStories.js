import React from "react";
import PreOrderForm from "../preOrderForm/PreOrderForm";
import GetInTouchForm from "../getInTouchForm/GetInTouchForm";
import TellStoryForm from "../tellStoryForm/TellStoryForm";
import DarkBurger from "../header/DarkBurger";
import styled from "styled-components";

export default function ShortStories() {
  return (
    <>
      <DarkBurger />
      <ShortStoriesWrapper>
        <h3>This is the Short stories page</h3>
        <hr />
        <TellStoryForm />

        <hr />
        <GetInTouchForm />
        <hr />

        <PreOrderForm />
      </ShortStoriesWrapper>
    </>
  );
}

const ShortStoriesWrapper = styled.div`
  /* margin-top: 140px; */
  width: 100%;
`;
