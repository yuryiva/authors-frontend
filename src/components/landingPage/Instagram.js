import React from 'react';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

// Carousel breakpoints
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
];

const Instagram = () => {
    return (
        <InstaWrapper>
            <InstaText>
                <InstaContact>
                    <h4>#Authxrs #writethechange</h4>
                    <p>@Authxrs</p>
                </InstaContact>
                <Follow>
                    <button>Follow</button>
                </Follow>
            </InstaText>

            <Carousel 
                breakPoints={breakPoints}
                // itemPadding={[10, 10]}                    
            >
                <ImgWrapper>
                    <img src='https://images.unsplash.com/photo-1610824771380-390c72f79f11?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='portrait' />
                </ImgWrapper>
                <ImgWrapper>
                    <img src='https://images.unsplash.com/photo-1610948237307-bbebf8da8a8d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='portrait' />
                </ImgWrapper>
                <ImgWrapper>
                    <img src='https://images.unsplash.com/photo-1610935591850-9a3bf14810c0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='portrait' />
                </ImgWrapper>
                    
                <ImgWrapper>
                    <img src='https://images.unsplash.com/photo-1610824771380-390c72f79f11?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='portrait' />
                </ImgWrapper>
            </Carousel>
        </InstaWrapper>                 
        
    )
}

const InstaWrapper = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    text-align:center;
    align-items:center;    
    font-family: 'Space Mono', monospace;
    width:100%;    
    padding: 0 5%;   
    margin: 0;     
    margin-bottom:100px; 
    
    @media (max-width: 500px) {
        padding: 0 2%;      
    } 
`


// const InstaImgLinks1 = styled.div`
//     display: flex;
//     flex-wrap: wrap;    
//     justify-content: space-between;
//     margin: 0; 
//     padding: 0;   
//     width: 100%;
//     overflow: hidden;
// `

const ImgWrapper = styled.div `   
    margin: 0 20px;    
    width: 500px;    
    /* height: 500px; */
    display: inline-block;
    overflow: hidden;
    position: relative;

    img {
        display: block;        
        width: 100%;  
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;    
        transition: transform 0.8s;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            transform-origin: 50% 50%;
        }        
    }   
`
    

const InstaText = styled.div `
    display:flex;    
    justify-content: space-between;    
    margin-bottom:30px;    
    width:100%;
`

const InstaContact = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:left;
    text-align:left;
    margin-left: 20px;    

    h4 {
        font-weight:400;
        margin:0;
    }
    p{ 
        font-weight:300;
        margin:5px;
        margin-left:0;
    }

`

const Follow = styled.div `
button {
    width:130px;
    height:40px;
    border-radius:2px;    
    margin-right: 20px;    
    border:1px solid black;
    background-color:white;
    cursor: pointer;
    outline:none;

    /* @media(max-width:450px){
        margin-left:30px;
    } */
}

    button:hover {
        background-color:lightgray;
        border:0;
        cursor: pointer;
    }

    button:active {
        background-color:black;
        color:white;
    }
`

export default Instagram;