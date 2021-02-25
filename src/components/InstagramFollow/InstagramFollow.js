import React, { Component } from "react";
import styled from "styled-components";

const profileId = "45295809413";
const numberOfPosts = "4";
class InstagramFollow extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch(
      `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"${profileId}","first":${numberOfPosts}}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.data.user.edge_owner_to_timeline_media.edges,
        });
      });
  }
  render() {
    console.log(this.state.data);

    let dimensions = this.state.data.map((element) => element.node.dimensions);
    console.log(dimensions);

    let heights = dimensions.map((element) => element.height);
    console.log(heights);

    let widths = dimensions.map((element) => element.width);
    console.log(widths);

    const ratios = [];
    for (let i = 0; i < heights.length; i++) {
      ratios.push(widths[i] / heights[i]);
    }
    console.log(ratios);

    return (
      <Main 
      // style={{ display: "flex" }}
      
      >
        {this.state.data.map((post) => (
          <PicDiv 
          // key={post} style={{ flex: '2 8' }}
          >
           {/* <img
               style={{ width: "100%", height: "auto", verticalAlign: "middle" }} */}
              <Image
              src={post["node"].display_resources[0].src}
              alt="instagram post"
            />
          </PicDiv>
        ))}
      </Main>
    );
  }
}
export default InstagramFollow;

const Main = styled.div`
  display: flex;
  /* flex-direction: row; */
`;

const PicDiv = styled.div`
  /* width: 450px;
  height: 450px; */
  /* flex: 1.3344; */
  border: 26px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  vertical-align: middle;
  object-fit: cover;
`;
