import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SubscribeForm from "../subscribeForm/Subscribe";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterWrapper>
        <FooterLinks>
          <AboutUs>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about-us"
            >
              <h4>About Us</h4>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="about-us"
            >
              <p>Who We Are</p>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="about-us"
            >
              <p>Our Story</p>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="about-us"
            >
              <p>Our Vision</p>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="about-us"
            >
              <p>Our Values</p>
            </Link>
          </AboutUs>

          <OurWork>
            <h4>Our Work</h4>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="about-us"
            >
              {" "}
              <p>How We Work</p>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="about-us"
            >
              <p>Sustainability</p>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/our-partners"
            >
              <p>Our Partners</p>
            </Link>
          </OurWork>

          <ContactUs>
            <h4>Contact Us</h4>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/send-email"
            >
              <p>Send Email</p>
            </Link>

            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.linkedin.com/company/authors-i-s/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <p>LinkedIn</p>
            </a>
          </ContactUs>
        </FooterLinks>
        <Subscribe>
          <h4>Join Us</h4>
          <p style={{ fontSize: 14 }}>
            Subscribe for latest updates, new stories and promotions
          </p>

          <SubscribeForm />
        </Subscribe>
      </FooterWrapper>
      <Copyright>
        <p>Copyright Authxrs© 2021</p>
      </Copyright>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 5%;
  background-color: lightgray;  
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;   

  p {
    font-size: 14px;
  }

  ${"" /* h4 {
    font-weight: 510;
  } */}
  
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;  

  h4 {
    margin-bottom: 10px;
    margin-right: 40px;
  }

  p {
    font-weight: 350;
    margin-bottom: 10px;
  }
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px;

  p {
    :hover {
      text-decoration: underline;
    }
  }
`;

const OurWork = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px;

  p {
    :hover {
      text-decoration: underline;
    }

  }
`;

const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px;

  p,
  a {
    :hover {
      text-decoration: underline;
    }
   
  }
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px;

  input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid black;
    background-color: lightgray;
    margin: 20px 0;
    text-decoration: 0;
    outline: none;
    cursor: pointer;
  }

  input:active {
    text-decoration: 0;
    border: 0;
    outline: none;
    border: none;
  }

  button {
    height: 30px;
    padding-left: 8%;
    padding-right: 8%;
    border: 1px solid black;
    border-radius: 5px;
    background-color: lightgray;
    text-align: center;
    outline: none;
    cursor: pointer;
  }

  button:active {
    background-color: gray;
    color: white;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    font-weight: 350;
    margin: 0;
    padding: 0;
    max-width: 250px;
    margin-bottom: 10px;
  }
`;

const Copyright = styled.div`  
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  p {
    font-size: 14px;
    font-weight: 300;    
  }
`;

export default Footer;
