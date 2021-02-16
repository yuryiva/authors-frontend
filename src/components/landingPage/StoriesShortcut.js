import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Carousel from "react-elastic-carousel";
import podcast from '../../assets/short-stories.jpg';
<style>@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');</style>;
<style>@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');</style>

// Carousel breakpoints
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
];

const StoriesShortcut = () => {
    useEffect (() => {
        Aos.init({duration:3000});
    }, []);
    return (
        <StoryWrapper>
            <StoryText>
                <h3>Stories from around the world</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
            </StoryText>

            <Carousel breakPoints={breakPoints}>                
                <Stories>  
                    <ImageWrapper>
                        <img 
                            data-aos='fade-up' 
                            // src='https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            alt='portrait'
                            src='https://images.unsplash.com/photo-1610824771380-390c72f79f11?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                        />   
                    </ImageWrapper>                      
                        
                    <TextWrapper>
                        <h3>Authors</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </TextWrapper>                     
                </Stories>                    
                
                <Stories>
                    <ImageWrapper>
                        <img 
                            data-aos='fade-up' 
                            // src='https://images.unsplash.com/photo-1610916975200-6d28742d4dd6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            // src={podcast} 
                            alt='portrait' 
                            src='https://images.unsplash.com/photo-1610948237307-bbebf8da8a8d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        />  
                    </ImageWrapper>
                        
                    <TextWrapper>
                        <h3>Authors</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </TextWrapper>                      
                </Stories>                    
              
                <Stories>
                    <ImageWrapper>
                        <img 
                            data-aos='fade-up' 
                            // src='https://images.unsplash.com/photo-1610801264293-588a3b6c3446?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            alt='portrait' 
                            src='https://images.unsplash.com/photo-1610935591850-9a3bf14810c0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        />
                    </ImageWrapper>
                           
                    <TextWrapper>
                        <h3>Short Stories</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </TextWrapper>                     
                </Stories>               
            </Carousel>
        </StoryWrapper>
    )
}

const StoryWrapper = styled.div`    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    justify-content:center;
    align-items: center;    
    font-family: 'Space Mono', monospace;
    /* width:100%;     */
    padding: 0 5%;   
    margin: 0;     
    margin-bottom:100px; 
    
    @media (max-width: 500px) {
        padding: 0 2%;      
    } 
`

const StoryText = styled.div`
    margin: 50px 0;    
    width: 50%;
    /* align-self: flex-start; */

    h3 {
        font-size: 1.8rem;       
        margin: 50px auto;        
    }

    p {
        font-size: 1.1rem;
        margin: 50px auto;
    }

    @media (max-width: 1000px) {
        width: 80%;
        align-self: center;
        margin: 50px 0;
    }
`

const ImageWrapper = styled.div`
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 100%;   
    max-height: 600px;    

    img {         
        display: block;        
        width: 100%;                                    
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;          
        transition: transform 0.8s; 
        transform-origin: 50% 50%;       

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            transform-origin: 50% 50%;            
        }        
    }
`

const Stories = styled.div` 
    width: 500px;       
    margin: 0 20px;      
    display: inline-block;   
`

const TextWrapper = styled.section`
    display: flex;
    flex-direction: column;
    /* width: 450px; */
    text-align: left;

    h4 {
        font-size: 1.5rem;       
        /* margin: 50px auto;         */
    }

    p {
        font-size: 14px;
        /* margin: 50px auto; */
    }
`

export default StoriesShortcut;