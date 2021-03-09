import { Link } from "react-router-dom";
import styled from "styled-components";
import authors1a from "../../assets/authors1a.jpg";
import authors1 from "../../assets/authors1.jpg";
import authors2 from "../../assets/authors2.jpg";
import authors3 from "../../assets/authors4.jpg";
import authors4 from "../../assets/authors5.jpg";
import authors5 from "../../assets/authors6.jpg";

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
    authorProfile: "Wole Soyinka",
    description:
      "Approaches to water resources management (WRM) within the South African state reflecting both the interests of dominant actors and more generally held understandings of what water is and what it is for. ",
    authorLocation: "Sokoto, Nigeria",
  },
  {
    authorId: Math.random(),
    authorUrl: `${authors1}`,
    authorProfile: "Máxima Guerrero",
    description:
      "As protesters for the BLM movement are arrested throughout the country, many of which are in a vulnerable immigration status in the United States. Some are in the process of gaining citizenship. Others, like undocumented immigrants or Deferred Action for Childhood Arrivals program recipients, risk being detained by or handed over to Immigration and Customs Enforcement.",
    authorLocation: "Phoenix Arizona, USA",
  },
  {
    authorId: Math.random(),
    authorUrl: `${authors2}`,
    authorProfile: "Maria Kolesnikova",
    description:
      "Fighting against oppression, civil liberties, human rights and a totalitarian form of government. ",
    authorLocation: "Minsk, Belarus",
  },
  {
    authorId: Math.random(),
    authorUrl: `${authors3}`,
    authorProfile: "Duangdeuan Viravong",
    description:
      "Land grabbing and impacts to small scale farmers in Southeast Asia sub regions.  Large-scale acquisitions by corporate investors or government entities in order to produce food or non food crops or to use the land for extractive purposes, such as hydropower dams and logging.",
    authorLocation: "Pakse, Laos",
  },
  {
    authorId: Math.random(),
    authorUrl: `${authors4}`,
    authorProfile: "Patricia Gualinga",
    description:
      "Protection of the Kichwa People of Sarayaku community from human rights violations resulting from oil extraction projects by Chinese companies on their land.",
    authorLocation: "Sarayaku, Ecuador",
  },
  {
    authorId: Math.random(),
    authorUrl: `${authors5}`,
    authorProfile: "Olga Skrypnyk",
    description:
      "Working to support a civil society and promoting the observance and protection of human rights in Crimea. Also supporting Ukrainian political prisoners who are imprisoned in Russia and Crimea.",
    authorLocation: "Kyiv, Ukraine",
  },
];

const Authors = () => {
  return (
    <ScrollWrapper>
      {authors.map((author) => (
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          to="/authors-story"
          key={author.authorId}
        >
          <StoryText>
            <h4>{author.authorProfile}</h4>
            <p>{author.description}</p>
            <h5>{author.authorLocation}</h5>
            <img src={author.authorUrl} alt="author-profile" />
          </StoryText>
        </Link>
      ))}
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.div`
  max-height: 100vh;
  min-width: 100vw;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  color: white;
  :-webkit-scrollbar {
    display: none;
  }
  /* margin-top:-100px; */
`;

const StoryText = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${authors[0]
    .authorUrl}); */
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
    font-size: 0.9rem;
    cursor: pointer;

    @media (max-width: 500px) {
      font-size: 0.8rem;
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
`;

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
