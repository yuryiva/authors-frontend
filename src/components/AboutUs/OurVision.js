import React from 'react';
import styled from 'styled-components';


export default function OurVision() {
    return (
       <VisionWrapper>
           <h2>Our Vision</h2>
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
       </VisionWrapper>
    )
}

const VisionWrapper = styled.div`
display:flex;
flex-direction:column;
text-align:center;
align-items:center;
margin:100px 0;

width:100%;

h2 {
    margin-bottom:50px;
}

p {
    width:50%;
}
`
