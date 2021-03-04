import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import bannerImage from '../../assets/photo2.jpg';

export default function Banner() {
    return (
        <BannerContainer>
            <motion.h1 
                initial={{ 
                    opacity: 0, 
                    color: '#fff', 
                    fontSize: '3rem',
                    padding: '25px 15px',                    
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
            >
                Authxrs
            </motion.h1>

            <motion.h2
                initial={{ 
                    opacity: 0, 
                    color: '#fff', 
                    fontSize: '1.2rem',
                    padding: '25px 20px',
                    alignSelf: 'center'
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 3.5 }}
            >
                Join The Movement And Team Up With Authxrs Of Today
            </motion.h2>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`    
    width: 100%;
    height: 100vh;
    position: relative;    
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${bannerImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;     
`

