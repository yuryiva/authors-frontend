import React from 'react';
import DarkBurger from '../header/DarkBurger';
import styled from "styled-components";

export default function JoinTheMovement() {
    return (
        <>
            <DarkBurger />
            <JoinTheMovementWrapper>
                
                <h3>This is the JoinTheMovement page</h3>
                <hr/>
            </JoinTheMovementWrapper>
        </>
        
    )
}

const JoinTheMovementWrapper = styled.div`
    padding-top: 140px;
`
