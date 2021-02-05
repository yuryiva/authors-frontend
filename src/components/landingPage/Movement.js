import React from 'react';
import styled from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

const JoinTheMovement = () => {
      return (
            <MovementWrapper>
                <h1>JOIN THE MOVEMENT</h1>
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

export default JoinTheMovement;