
import { Link } from "react-router-dom";
import styled from 'styled-components';
import authors1a from '../../assets/authors1a.jpg';
import authors1 from '../../assets/authors1.jpg';
import authors2 from '../../assets/authors2.jpg';
import authors3 from '../../assets/authors4.jpg';
import authors4 from '../../assets/authors5.jpg';
import authors5 from '../../assets/authors6.jpg';

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
                    <Link 
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/authors-story"
                        key={ author.authorId }
                    >
                        <StoryText>                        
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
`

const StoryText = styled.div `
    width: 100vw;
    height: 100vh;
    position: relative;    
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

export default Authors;
