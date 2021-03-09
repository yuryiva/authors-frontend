import React from "react";
import styled from "styled-components";
import cris from "../../assets/Cris_authxrs.jpg";
import crisandsara from "../../assets/cris&sara_authxrs.jpg";
import crissara from "../../assets/cris&sara_authxrs.jpg";

export default function OurStory() {
  return (
    <OurStoryWrapper>
      <OurStorySection>
        <OurStory1>
          <div>
            <h5>Authxrs |</h5>
            <p>Our Story</p>
          </div>
          <img src={cris} alt="cris" />
        </OurStory1>
        <OurStory2>
          <img src={crisandsara} alt="sara and cris" />
          <div>
            <h5>Sara & Cristina |</h5>
            <p>
              {" "}
              With backgrounds in Journalism, Global Refugee Studies and
              Development & International Relationships Sara and Cristina
              noticed a lack of firsthand testimonies on current situations of
              crisis, suppression and struggle. The only testimonies that seemed
              to reach the public were stories written and edited by journalist
              or academics and not by the actual subjects themselves. They see
              Authxrs as an opportunity to try to minimize the gap in equal
              opportunities and reach. They aim to facilitate and produce
              knowledge to readers interested in social, political and economic
              situations of these people inside and outside the geographical
              social cultural scope.
            </p>
          </div>
        </OurStory2>
      </OurStorySection>
      <QuoteSection>
        <h5>
          Authxrs have worked with some amazing organizations to make this dream
          a reality. Below you can read more on their background and why they
          make dynamic team.
        </h5>
      </QuoteSection>
      <TextSection3>
        <TextSection3Text>
          <p>
            Their goal is to become a socially aware and sustainable publishing
            house. They plan to focus on 3 different media types to produce and
            publish (Books, Podcasts & Short Stories). Their main product will
            be a series of books written by oppressed people who do not have the
            necessary reach or skills to to publish the books themselves. The
            Podcast will be a tool to promote the books and to document the
            Authxrs journey. Cristina has a tutoring background in professional
            writing to assist the Authxrs throughout the process of writing,
            from approaching and listening to them and to supporting their
            writing in a technical way. Sara is a qualified Journalist and she
            can guide the Authxrs via her journalism, communication, research
            and product management background. As a team they are able to
            approach sensitive matters with both empathy and the professionalism
            that these situations may require.
          </p>

          <img src={crissara} alt="cris and sara portrait" />
        </TextSection3Text>
      </TextSection3>
    </OurStoryWrapper>
  );
}

const OurStoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const OurStory1 = styled.div`
  img {
    width: 90%;
  }

  div {
    margin: 40px 50px;
  }

  @media (max-width: 800px) {
    display: none;
    img {
      width: 100%;
      margin-right: 100px;
    }
  }
`;

const OurStorySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  margin-top: 100px;
  border-top: 1px lightgray solid;
`;

const OurStory2 = styled.div`
  right: 0;
  text-align: right;

  img {
    width: 90%;
    margin-top: -20px;
  }

  div {
    text-align: left;
    margin: 100px 100px;
    width: 50%;
  }
  p {
    font-size: 14px;
  }
`;

const QuoteSection = styled.div`
  background-color: lightgray;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 400px;
  margin: 80px 0;

  h5 {
    font-size: 18px;
    font-weight: 100;
    width: 60%;
    line-height: 2.5rem;
  }

  @media (max-width: 600px) {
    h5 {
      font-size: 12px;
    }
    margin: 0px 0px 50px 0;
  }
`;

const TextSection3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0px 0 100px 0;
`;

const TextSection3Text = styled.div`
  width: 50%;

  height: auto;
  margin-left: 0;

  p {
    font-size: 17px;
    line-height: 1.8em;
    font-weight:100;
    margin-bottom:50px;
  }

  img {
    width:100%;
  }

  @media (max-width: 600px) {
    p{font-size:10px;}

  @media (max-width: 1100px) {
    width: 70%;
  }
`;
