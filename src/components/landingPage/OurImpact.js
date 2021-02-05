import React from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import ourImpactPhoto from '../../assets/photo1.jpg';
import ourValuesPhoto from '../../assets/photo7.jpg';

export default function OurImpact() {
    return (
        <AboutUsSection>
            <MainHeading>
                <h3>Who We Are</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply 
                    random text. It has roots in a piece of classical Latin 
                    literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney 
                    College in Virginia, looked up one of the more obscure Latin 
                    words.
                </p>
            </MainHeading>
            <OurImpactSection>
                <OurImpactDescription>
                    <h4>How we work</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply 
                        random text. It has roots in a piece of classical Latin 
                        literature from 45 BC, making it over 2000 years old. 
                        Richard McClintock, a Latin professor at Hampden-Sydney 
                        College in Virginia, looked up one of the more obscure Latin 
                        words.
                    </p>
                </OurImpactDescription>
                <OurImpactPhoto>
                    <img src={ourImpactPhoto} alt="pen" />
                </OurImpactPhoto>
            </OurImpactSection>

            <OurValuesSection>
                <OurValuesDescription>
                    <h4>Tell your story</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply 
                        random text. It has roots in a piece of classical Latin 
                        literature from 45 BC, making it over 2000 years old. 
                        Richard McClintock, a Latin professor at Hampden-Sydney 
                        College in Virginia, looked up one of the more obscure Latin 
                        words.
                    </p>
                </OurValuesDescription>
                <OurValuesPhoto>
                    <img src={ourValuesPhoto} alt="pen" />
                </OurValuesPhoto>
            </OurValuesSection>
        </AboutUsSection>
    )
}

const AboutUsSection = styled.section`
    min-height: 100vh;
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const MainHeading = styled.div`  
    margin: 100px 0;    
    width: 50%;

    h3 {
        font-size: 1.8rem;
        border-top: 4px solid #000;
        width: 177px;
        margin: 50px auto;
        /* margin-bottom: 0; */
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

const OurImpactSection = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    /* padding: 2rem; */

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const OurImpactDescription = styled.section`
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        padding: 0 25px;
    }

    p {
        font-size: 1.1rem;
        padding: 0 10%;
    }
`

const OurImpactPhoto = styled.div`
    /* width: 500px;     */
    width: 100%;    
    display: inline-block;
    overflow: hidden;
    margin-left: 10%;
    /* border-radius: 5px; */

    img {
        display: block;        
        width: 100%;
        /* height:300px;   */
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

    @media (max-width: 1000px) {
        width: 80%;
        align-self: center;
        margin: 50px 0;
    }
`

const OurValuesSection = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* padding: 2rem; */

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const OurValuesDescription = styled.section`
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        padding: 0 25px;
    }

    p {
        font-size: 1.1rem;
        padding: 0 10%;
    }
`

const OurValuesPhoto = styled.div`
    /* width: 500px;     */
    width: 100%;    
    display: inline-block;
    overflow: hidden;
    margin-right: 10%;
    /* border-radius: 5px; */

    img {
        display: block;
        width: 100%;
        /* height:300px;   */
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

    @media (max-width: 1000px) {
        width: 80%;
        align-self: center;
        margin: 50px 0;
    }
`










