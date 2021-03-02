import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

const JoinTheMovement = () => {
      return (
            <MovementWrapper>
                <QuoteSection>
                <h5>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </h5>
                <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about-us"> <button>ABOUT US</button></Link>
            </QuoteSection>
            </MovementWrapper>
      )
}

const MovementWrapper = styled.div`
      background-color:lightgray;
      display:flex;
      text-align:center;
      justify-content:center;
      height:400px;
      margin: 100px 0;
      font-family: 'Space Mono', monospace;

h1 {
      font-size:40px;
      font-weight:lighter;
      padding-top:150px;
}

`
const QuoteSection = styled.div`
    background-color:lightgray;
    text-align:center;
    align-items:center;
    flex-direction:column;
    display:flex;
    justify-content:center;
    margin: 80px 0;

    h5 {
        font-size:18px;
        font-weight:100;
        width:60%;
        line-height:2.5rem;
    }

    button {
          width:150px;
          height:40px;
          border-radius:2px;
            background-color:transparent;
            border:1px solid grey;
            margin-top:30px;
    }

    @media (max-width: 600px) {
   
   h5 {
     width:80%;
     font-size:13px;
   }
`

export default JoinTheMovement;