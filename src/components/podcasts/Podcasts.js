import React from 'react';
import styled from 'styled-components';
import DarkBurger from '../header/DarkBurger';

const Podcast = () => {
      return (
            <>
                  <DarkBurger />
                  <PodcastDiv>                  
                       
                        <iframe src="https://embed.podcasts.apple.com/us/podcast/what-we-can-learn-from-indigenous-communities-nina/id1542980507" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"></iframe>
                  </PodcastDiv>
            </>
            
      )
}

const PodcastDiv = styled.div `
width:100%;
display:flex;
justify-content:center;
padding-top: 140px;

iframe {
      display:flex;
      justify-content:center;
      width:80%;
      border:0;
      height:500px;
}
`

export default Podcast;

