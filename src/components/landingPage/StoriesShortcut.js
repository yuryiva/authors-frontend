import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css'
<style>@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');</style>;
<style>@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');</style>

const StoriesShortcut = () => {
    useEffect (() => {
        Aos.init({duration:3000});
    }, []);
      return (
            <StoryWrapper>
                <StoryText>
                    <h4>STORIES FROM AROUND THE WORLD</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                </StoryText>
                <StoryImgLinks>
                <ImgWrapper>
                        <img 
                            data-aos='fade-up' 
                            src='https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            alt='portrait' 
                        />
                       <h3>Authors</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </ImgWrapper>
                    <ImgWrapper>
                        <img 
                            data-aos='fade-up' 
                            src='https://images.unsplash.com/photo-1610916975200-6d28742d4dd6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            alt='portrait' 
                        />
                       <h3>Podcast</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </ImgWrapper>
                    <ImgWrapper>
                        <img 
                            data-aos='fade-up' 
                            src='https://images.unsplash.com/photo-1610801264293-588a3b6c3446?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            alt='portrait' 
                        />
                        <h3>Short Stories</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </ImgWrapper>
                </StoryImgLinks>
            </StoryWrapper>
      )
}

const StoryWrapper = styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    justify-content:center;


`

const StoryImgLinks = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    width:100%;
    justify-content:center;

    @media (max-width: 800px) {
        overflow-x:auto;
        justify-content:left;
        display:flex;
        margin:0 40px;
    }
`
const StoryText = styled.div` 
    display:flex;
    flex-direction:column;
    width:40%;
    justify-content:center;
    text-align:left;
    padding-left:7%;
    margin-bottom:2%;

    h4 {
        font-size:18px;
    }

    p {
        font-size:10px;
        font-weight:100;
    }

    @media (max-width:800px) {
        width:60%;
        padding-left:8%;
    }

    @media (max-width:400px) {
        width:90%;
        padding-left:15%;
    }
`

const ImgWrapper = styled.div `
    width:28%;
    margin:10px;

    img {
        width:100%;
        height:80%;
    }

    h3 {
        font-size:15px;
    }


    p {
        width: 70%;
        font-size:10px;
    }
    
    @media (max-width: 800px) {
        width:90%;
        

        img {
            margin:10px;
            width:70vw;
            height:70%;
        }
    }

`


export default StoriesShortcut;