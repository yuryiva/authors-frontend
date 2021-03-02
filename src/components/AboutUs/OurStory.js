import React from 'react';
import styled from 'styled-components';
import cris from '../../assets/Cris_authxrs.jpg';
import crisandsara from '../../assets/cris&sara_authxrs.jpg';
import crissara from '../../assets/cris&sara_authxrs.jpg'


export default function OurStory() {
    return (
        <OurStoryWrapper>
                <OurStorySection>
                <OurStory1>
                    <div>
                    <h5>Authxrs |</h5>
                    <p>Our Story</p>
                    </div>
                    <img src={cris} alt="cris"/>
                </OurStory1>
                <OurStory2>
                    <img src={crisandsara} alt="sara and cris"/>
                    <div>
                    <h5>Sara & Cristina |</h5>
                    <p> Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </OurStory2>
                </OurStorySection>
                <QuoteSection>
                <h5>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </h5>
            </QuoteSection>
            <TextSection3>
        <TextSection3Text>
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
            random text.
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
            in Virginia, 
          </p>
          <img src={crissara} alt="cris and sara portrait" />
        </TextSection3Text>
      </TextSection3>
        </OurStoryWrapper>
    )
}

const OurStoryWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
text-align:left;
`

const OurStory1 = styled.div `

img {
    width:90%;
}

div {
    margin:40px 50px;
}


@media (max-width: 800px) {
   display:none;
   img {
     width:100%;
     margin-right:100px;
   }
  }

`

const OurStorySection = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
text-align:left;
margin-top:100px;
border-top: 1px lightgray solid;

`

const OurStory2 = styled.div `
right:0;
text-align:right;

img {
    width:90%;
    margin-top:-20px;
}

div {
    text-align:left;
    margin:100px 100px;
    width:50%;
}
p{
    font-size:14px;
}
`

const QuoteSection = styled.div`
    background-color:lightgray;
    text-align:center;
    align-items:center;
    display:flex;
    justify-content:center;
    height:400px;
    margin: 80px 0;

    h5 {
        font-size:18px;
        font-weight:100;
        width:60%;
        line-height:2.5rem;
    }

    @media (max-width: 600px) {
    h5{font-size:12px;}
    margin: 0px 0px 50px 0;
  }
`

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