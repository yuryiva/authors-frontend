import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import authorimg1 from "../../assets/authors1a.jpg";
import authorimg2 from "../../assets/farmer.jpeg";
import authorimg3 from "../../assets/authors5.jpg";
import authorimg4 from "../../assets/authors7.jpeg";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>;

const AuthorsStory = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <StoryWrapper>
      <Banner>
        <img src={authorimg1} alt="banner" />
      </Banner>
      <StorySection1>
        <StorySection1Text>
          <h2>Author Name, Location</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </StorySection1Text>
        <StorySection1Img>
          <img src={authorimg2} alt="nature" />
        </StorySection1Img>
      </StorySection1>
      <HR>
        <hr />
      </HR>
      <StorySection2>
        <StorySection2Img>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={authorimg4}
            alt="records-room"
          />
        </StorySection2Img>
        <h1>"Quote of the story inserted here"</h1>
      </StorySection2>
      <StorySectionMiddle data-aos="fade-up" data-aos-duration="3500">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </StorySectionMiddle>
      <StorySectionMiddle>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </StorySectionMiddle>
      <StorySection3>
        <StorySection3Text>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
        </StorySection3Text>
        <StorySection3Img>
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            src={authorimg3}
            alt="author"
          />
        </StorySection3Img>
      </StorySection3>
    </StoryWrapper>
  );
};

// SECTION 1

const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 200px;
  overflow: hidden;

  img {
    width: 100vw;
    height: 100vh;
    vertical-align: middle;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    margin-bottom: 80px;
  }
`;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const StorySection1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const StorySection1Text = styled.div`
  width: 30%;
  margin: 20px;
  height: auto;
  text-align: left;

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 12px;
    line-height: 2em;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 70%;
  }
`;

const StorySection1Img = styled.div`
  img {
    width: 70%;
    height: 80%;
  }
`;

// SECTION 2

const StorySection2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 100px;

  h1 {
    margin-top: 100px;
  }

  @media (max-width: 500px) {
    h1 {
      width: 80%;
      font-size: 30px;
    }
  }
`;

const StorySection2Img = styled.div`
  img {
    width: 70%;
  }
`;

// MIDDLE STORY SECTION

const StorySectionMiddle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 100px;

  p {
    width: 40%;
    line-height: 2em;
    margin: 0 100px;
    margin-bottom: 10px;
  }

  @media (max-width: 1100px) {
    p {
      width: 70%;
      margin: 10px;
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 20px;
    p {
      width: 80%;
      font-size: 13px;
    }
  }
`;

// SECTION 3

const StorySection3 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 100px;
`;

const StorySection3Text = styled.div`
  width: 40%;
  text-align: center;
  align-items: center;
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

  @media (max-width: 500px) {
    p {
      margin-top: 50px;
      width: 100%;
      font-size: 13px;
    }
  }
`;

const StorySection3Img = styled.div`
  margin-bottom: 0px;
  img {
    width: 60%;
  }

  @media (max-width: 500px) {
    img {
      width: 90%;
    }
  }
`;

const HR = styled.div`
  hr {
    border: 0;
    background-color: lightgray;
    display: flex;
    justify-content: left;
    width: 85%;
    height: 4px;
    margin: 0;
    padding: 0;
  }
`;

export default AuthorsStory;
