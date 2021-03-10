import React from "react";
import DarkBurger from "../header/DarkBurger";
import styled from "styled-components";

export default function JoinTheMovement() {
  return (
    <>
      <DarkBurger />
      <JoinTheMovementWrapper>
        <h4>Join The Movement page - Currently Under Construction</h4>
        <hr />
      </JoinTheMovementWrapper>
    </>
  );
}

const JoinTheMovementWrapper = styled.div`
  padding-top: 140px;

  h4 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
  }
`;
