import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import farmer from '../../assets/farmer.jpeg';
import waterfall from '../../assets/waterfall.jpeg';
import podcastimg from '../../assets/podcast1.jpg';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
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
                            alt='portrait'
                            src={waterfall} 
                        />   
                    </ImageWrapper>                      
                        
                    <TextWrapper>
                        <h4>Bare necessities</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </TextWrapper>                     
                </Stories>                    
                
                <Stories>
                    <Link to="/podcasts">
                        <ImageWrapper>
                            <img 
                                data-aos='fade-up' 
                                alt='portrait' 
                                src={podcastimg}
                            />  
                        </ImageWrapper>
                    </Link>                    
                        
                    <TextWrapper>
                        <h4>Authxrs Podcast</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </TextWrapper>                      
                </Stories>                    
              
                <Stories>
                    <ImageWrapper>
                        <img 
                            data-aos='fade-up' 
                            alt='portrait' 
                            src={farmer}
                        />
                    </ImageWrapper>
                           
                    <TextWrapper>
                        <h4>The last members</h4>
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
    padding: 0 5%;   
    margin: 0;     
    margin-bottom:100px; 
    
    @media (max-width: 500px) {
        padding: 0 2%;      
    } 
`

const StoryText = styled.div`
    margin: 50px 0;    
    width: 60%;    

    h3 {
        font-size: 1.8rem;       
        margin: 50px auto;
        text-align: center;        
    }

    p {
        font-size: 1rem;
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
    outline: none;  
`

const TextWrapper = styled.section`
    display: flex;
    flex-direction: column;    
    text-align: left;

    h4 {
        font-size: 1.4rem;       
    }

    p {
        font-size: 14px;       
    }
`

export default StoriesShortcut;