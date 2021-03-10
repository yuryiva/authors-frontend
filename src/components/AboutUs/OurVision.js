import React from "react";
import styled from "styled-components";

export default function OurVision() {
  return (
    <VisionWrapper>
      <h2>Our Vision</h2>
      <p>
        Authxrs exists because we want our readers to experience literature from
        the major regions of the non-Western world--the Caribbean, Latin
        America, sub-Saharan Africa, the Middle East, and South Asia. We offer a
        bridge between our culture and theirs. The editors believe that
        expanding the range of literature studied beyond the traditional
        American, Canadian, and European canonical writers will help readers
        better understand an increasingly interdependent world and at the same
        time create social awareness.
      </p>
    </VisionWrapper>
  );
}

const VisionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 100px 0;

  width: 100%;

  h2 {
    margin-bottom: 50px;
  }

  p {
    width: 50%;
  }
`;
