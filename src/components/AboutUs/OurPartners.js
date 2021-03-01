import React from 'react';
import styled from 'styled-components';
import unicef from '../../assets/unicef.png';
import wwf from '../../assets/WWF-logo.png';
import treeplant from '../../assets/treeplanted.png';
import oxfam from '../../assets/oxfam.png'

export default function OurPartners() {
    return (
        <PartnersWrapper>
            <PartnersLogoSection>
                <img src={unicef} alt="Unicef Logo"/>
                <img src={oxfam} alt="Oxfam Logo"/>
                <img src={treeplant} alt="Tree Planted Logo"/>
                <img src={wwf} alt="WWF Logo"/>
            </PartnersLogoSection>
            <QuoteSection>
                <h5>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </h5>
            </QuoteSection>

            <PartnerInfo>
                <PartnerImg>
                    <img src={unicef} alt="unicef" />
                </PartnerImg>
                <ParnterText>
                    <h2>
                        Unicef
                    </h2>
                    <p>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </ParnterText>
            </PartnerInfo>
            <PartnerInfo>
                <PartnerImg>
                    <img src={wwf} alt="WWF" />
                </PartnerImg>
                <ParnterText>
                    <h2>
                        World Wildlife Foundation
                    </h2>
                    <p>
                    Authxrs have worked with some amazing organizations to make this dream a reality. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </ParnterText>
            </PartnerInfo>
            <PartnerInfo>
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
            <PartnerInfo>
                <PartnerImg>
                    <img src={oxfam} alt="unicef" />
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

`
