import React from "react";
import styled from "styled-components";

export default function OurTeam() {
  return (
    <OurTeamWrapper>
      <StorySection1>
        <StorySection1Img>
          <img
            src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="portrait"
          />
          <h3>Authors</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </StorySection1Img>
        <StorySection1Img>
          <img
            src="https://images.unsplash.com/photo-1610916975200-6d28742d4dd6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="portrait"
          />
          <h3>Podcast</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </StorySection1Img>
      </StorySection1>

      <MiddleSection3>
        <MiddleSection3Text>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the wordContrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the wordContrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the wordContrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the wordContrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word
          </p>
        </MiddleSection3Text>
      </MiddleSection3>

      <StorySection2>
        <StorySection2Text>
          <h2>Author Name, Location</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word{" "}
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </StorySection2Text>
        <StorySection2Img>
          <img
            src="https://images.unsplash.com/photo-1590452366152-7c59da8b9524?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="image"
          />
        </StorySection2Img>
      </StorySection2>

      <StorySection2>
        <StorySection2Img>
          <img
            src="https://images.unsplash.com/photo-1590452366152-7c59da8b9524?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="image"
          />
        </StorySection2Img>
        <StorySection2Text>
          <h2>Author Name, Location</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word{" "}
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </StorySection2Text>
      </StorySection2>
    </OurTeamWrapper>
  );
}
// SECTION 1

const OurTeamWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const StorySection1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: auto;
  justify-content: center;
  text-align: left;
  padding-left: 7%;

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 10px;
    font-weight: 100;
  }
`;

const StorySection1Img = styled.div`
  width: 400px;
  height: 600px;
  margin: 50px 40px 0px 40px;

  img {
    width: 100%;
    height: 70%;
  }

  h3 {
    font-size: 15px;
  }

  p {
    width: 70%;
    font-size: 10px;
  }

  @media (max-width: 800px) {
    width: 90%;

    img {
      margin: 10px;
      width: 70vw;
    }
  }
`;

// SECTION Middle

const MiddleSection3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0px 0 100px 0;
`;

const MiddleSection3Text = styled.div`
  width: 60%;

  height: auto;
  margin-left: 0;

  img {
    margin-bottom: 100px;
  }

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
    line-height: 1.8em;
  }

  @media (max-width: 1100px) {
    width: 70%;
  }
`;

// SECTION 2

const StorySection2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const StorySection2Img = styled.div`
  img {
    width: 80%;
    height: 80%;
  }
`;

const StorySection2Text = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 50px;

  h1 {
    margin-top: 100px;
  }

  p {
    width: 400px;
    font-size: 12px;
    line-height: 2em;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
