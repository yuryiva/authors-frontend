import React from "react";
import styled from "styled-components";

const Podcast = () => {
  return (
    <PodcastDiv>
      <iframe
        src="https://embed.podcasts.apple.com/us/podcast/the-pat-mcafee-show-2-0/id1435183458"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      ></iframe>
    </PodcastDiv>
  );
};

const PodcastDiv = styled.div`
  margin-top: 140px;
  width: 100%;
  display: flex;
  justify-content: center;
  iframe {
    display: flex;
    justify-content: center;
    width: 80%;
    border: 0;
    height: 500px;
  }
`;

export default Podcast;
