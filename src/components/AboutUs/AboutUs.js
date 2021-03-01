import React, {useState} from 'react';
import OurPartners from './OurPartners';
import OurStory from './OurStory';
import OurTeam from './OurTeam';
import OurVision from './OurVision';
import styled from 'styled-components'

export default function AboutUs() {

    const [OurPartnersDiv, setOurPartners] = useState(false)
    const [OurTeamDiv, setOurTeam] = useState(true)
    const [OurStoryDiv, setOurStory] = useState(false)
    const [OurVisionDiv, setOurVision] = useState(false)

    function openPartners() {
        setOurPartners(true)
        setOurTeam(false)
        setOurStory(false)
        setOurVision(false)
    }
    function openTeam() {
        setOurTeam(true)
        setOurPartners(false)
        setOurStory(false)
        setOurVision(false)
    }
    function openStory() {
        setOurStory(true)
        setOurPartners(false)
        setOurTeam(false)
        setOurVision(false)
    }
    function openVision() {
        setOurStory(false)
        setOurPartners(false)
        setOurTeam(false)
        setOurVision(true)
    }



    return (
        <div>
            <Navbar>
            <button onClick={openTeam}>Our Team</button>
            <button onClick={openPartners}>Our Partners</button>
            <button onClick={openStory}>Our Story</button>
            <button onClick={openVision}>Our Vision</button>
            </Navbar>
            <AboutUsSection>
            {OurTeamDiv && <><OurTeam/></>}
            {OurPartnersDiv && <><OurPartners/></>}
            {OurStoryDiv && <><OurStory/></>}
            {OurVisionDiv && <><OurVision/></>}
            </AboutUsSection>

        </div>
    )
}

const Navbar = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    background-color:lightgray;
    height: 100px;
    margin-top:130px;

    button {
        border:0;
        background-color:transparent;
        width:200px;
        outline:none;
        font-size:25px;
        font-weight:100;

    }

    button:active {
        border-bottom: 1px solid black;
    }

`

const AboutUsSection = styled.div `

`
