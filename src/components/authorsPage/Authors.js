
// import React, {Route, Switch, useEffect} from 'react';
import styled from 'styled-components';
import authors1a from '../../assets/authors1a.jpg';
import authors1 from '../../assets/authors1.jpg';
import authors2 from '../../assets/authors2.jpg';
import authors3 from '../../assets/authors4.jpg';
import authors4 from '../../assets/authors5.jpg';
import authors5 from '../../assets/authors6.jpg';
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
        authorUrl: `${authors1a}`,
        authorProfile: 'Author One Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: `${authors1}`,
        authorProfile: 'Author Two Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: `${authors2}`,
        authorProfile: 'Author Three Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: `${authors3}`,
        authorProfile: 'Author Four Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: `${authors4}`,
        authorProfile: 'Author Five Profile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        authorLocation: 'Location, Location'
    },
    {
        authorId: Math.random(),
        authorUrl: `${authors5}`,
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
                    <StoryText key={ author.authorId }>
                        {console.log(author.authorId)}
                        <h4>{ author.authorProfile }</h4>
                        <p>{ author.description }</p>
                        <h5>{ author.authorLocation }</h5>
                        <img src={ author.authorUrl } alt='author-profile' />
                    </StoryText>
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
