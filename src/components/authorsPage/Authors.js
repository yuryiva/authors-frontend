
// import React, {Route, Switch, useEffect} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import Footer from './components/Footer/Footer';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
</style>;

const authors = [
    {
        authorId: Math.random(),
        authorUrl: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        authorProfile: 'Author One Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: 'https://images.unsplash.com/photo-1473040767970-c16f84cc4c05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        authorProfile: 'Author Two Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: 'https://images.unsplash.com/photo-1585771742132-7d18efffe607?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        authorProfile: 'Author Three Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: 'https://images.unsplash.com/photo-1587262538177-842ad13e290c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        authorProfile: 'Author Four Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        authorProfile: 'Author Five Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        authorProfile: 'Author Six Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    }
];

const Authors = () => {


    return (
        <ScrollWrapper>
            {
                authors.map(author => (
                    <Link 
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/authors-story"
                    >
                        <StoryText key={ author.authorId }>                        
                            <h4>{ author.authorProfile }</h4>
                            <p>{ author.description }</p>
                            <h5>{ author.authorLocation }</h5>
                            <img src={ author.authorUrl } alt='author-profile' />
                        </StoryText>
                    </Link>
                    
                ))
            }              
        </ScrollWrapper>
    )
}

const ScrollWrapper = styled.div `
    max-height:100vh;
    min-width:100vw;
    position:relative;
    overflow-y:scroll;
    overflow-x:hidden;
    scroll-snap-type:y mandatory;
    color:white;
    :-webkit-scrollbar {
        display: none;
    }
    /* margin-top:-100px; */
`

const StoryText = styled.div `
    width: 100vw;
    height: 100vh;
    position: relative;    
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${ authors[0].authorUrl }); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 5%;    
    
    scroll-snap-align: center;

    img {
        position: absolute;
        top: 0;
        /* left: 0; */
        align-self: center;
        min-width: 100%;
        min-height: 100%;
        z-index: -1;       
    }

    h4 {
        font-size: 2.2rem;
        margin-bottom: 20px;
        cursor: pointer;

        @media (max-width: 500px) {            
            font-size: 1.5rem;
        }
    }

    h5 {
        font-size: .9rem;
        cursor: pointer;

        @media (max-width: 500px) {            
            font-size: .8rem;
        }
    }

    p {
        font-size: 1.1rem;
        width: 50%;
        margin-bottom: 20px;
        cursor: pointer;

        @media (max-width: 1000px) {
            width: 60%;
        } 
        @media (max-width: 800px) {
            width: 70%;
        } 
        @media (max-width: 700px) {
            width: 80%;
        } 
        @media (max-width: 600px) {
            width: 90%;
        } 
        @media (max-width: 500px) {
            width: 100%;
            font-size: 1rem;
        } 
    }
`

// const StoryText = styled.div `
//     width:100%;
//     height:100%;   

// img {
//     min-width:100vw;
//     height:100vh;
//     scroll-snap-align:center;
//     text-align:center;
// }

/* h5,h4,p {
    text-align:left;
    align-items:bottom;
    position:absolute;
    width:40%;
    height:100%;
    margin-top:60px;
}

h4 {
    position:absolute;
    font-size:40px;
    margin-top:120px;
    margin-left:50px;

}

p {
    position:absolute;
    text-align:left;
    font-size:25px;
    margin:220px 0 0 50px;
}

h5 {
    position:absolute;
    text-align:left;
    font-size:15px;
    padding-top:20px;
    margin:400px 0 0 50px;
} */

// @media(max-width:800px) {
//     h4, p, h5 {
        
//         width:90%;
//     }

//     h5 {
//         margin-top:220px;
//     }
// }

// @media(max-width:400px) {
//      p {
        
//         width:60%;
//         margin-top:180px;
//     }

//     h5 {
//         margin-top:470px;
//     }
// }
// `



export default Authors;
