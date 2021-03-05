import React , {useEffect}  from 'react';
import styled from 'styled-components';
import wwf from '../../assets/WWF-logo.png';
import treeplant from '../../assets/treeplanted.png';
import oxfam from '../../assets/oxfam.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import wild from '../../assets/wild.png';
import ulogo from '../../assets/ulogo.png'

export default function OurPartners() {
    useEffect (() => {
        Aos.init({duration:3000});
    }, []);
    return (
        <PartnersWrapper>
            <PartnersLogoSection>
                <img src={ulogo}  alt="Unicef Logo"/>
                <img src={treeplant} alt="Oxfam Logo"/>
                <img src={wild} alt="Tree Planted Logo"/>
                <img src={wwf} alt="WWF Logo"/>
            </PartnersLogoSection>
            <QuoteSection>
                <h5>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </h5>
            </QuoteSection>

            <PartnerInfo data-aos='fade-left' >
                <PartnerImg >
                    <img src={ulogo}  alt="unicef" />
                </PartnerImg>
                <ParnterText>
                    <h2>
                    Aalborg University → AAU Startup
                    </h2>
                    <p>
                    Program supported us in our quest to turn our idea into a viable business. The program provided us with the guidance and advice of different experts from the business and entrepreneurial area during the initial stage of our enterprise. 
                    </p>
                </ParnterText>
            </PartnerInfo>
            <PartnerInfo data-aos='fade-right' >
                <PartnerImg>
                    <img src={wild} alt="WWF" />
                </PartnerImg>
                <ParnterText>
                    <h2>
                    Wild Code School
                    </h2>
                    <p>
                    Provided us with a team of people who trusted our project when it was just an idea. They developed our website and guided us to get our IT system up and running.
                    </p>
                </ParnterText>
            </PartnerInfo>
            <PartnerInfo data-aos='fade-left' >
                <PartnerImg>
                    <img src={treeplant} alt="Tree Planted" />
                </PartnerImg>
                <ParnterText>
                    <h2>
                        One Tree Planted
                    </h2>
                    <p>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </ParnterText>
            </PartnerInfo>
            <PartnerInfo data-aos='fade-right'>
                <PartnerImg>
                    <img src={oxfam} alt="oxfam" />
                </PartnerImg>
                <ParnterText>
                    <h2>
                        Oxfam
                    </h2>
                    <p>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </ParnterText>
            </PartnerInfo>
        </PartnersWrapper>
    )
}

const PartnersWrapper = styled.div``

const PartnersLogoSection = styled.div`
    display:flex; 
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    margin-top:70px;

    img {
        width:130px;
        height:130px;
        margin:0 30px;
    }

    @media (max-width:400px){
        margin:40px 0 10px 0;

            img{
                width:100px;
                height:auto;
                margin:10px 15px;
            }
            }

`

const QuoteSection = styled.div`
    background-color:lightgray;
    text-align:center;
    align-items:center;
    display:flex;
    justify-content:center;
    height:400px;
    margin: 80px 0;

    h5 {
        font-size:18px;
        font-weight:100;
        width:60%;
        line-height:2.5rem;
    }
    @media (max-width:400px){
        margin-top:40px;
        h5{font-size:12px;
           
        }}
`

const PartnerInfo = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
text-align:left;
align-items:center;
flex-wrap:wrap;
width:100%;
margin-bottom:20px;
`


const PartnerImg = styled.div`
    img {
        width:200px;
        margin:50px;
    }


`


const ParnterText = styled.div`
        width:50%;   

         @media (max-width:400px){
            width:70%;
            text-align:center;
        p{font-size:12px;
            
        }
        }   

`
