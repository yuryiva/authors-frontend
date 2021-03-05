import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landingPage/LandingPage";
import Authors from "./components/authorsPage/Authors";
import Books from "./components/books/Books";
import Podcasts from "./components/podcasts/Podcasts";
import ShortStories from "./components/shortStories/ShortStories";
import JoinTheMovement from "./components/joinTheMovement/JoinTheMovement";
import BurgerMenu from "./components/header/BurgerMenu";
import AboutUs from "./components/AboutUs/AboutUs";
import OurTeam from "./components/AboutUs/OurTeam";
import GetInTouchForm from "./components/getInTouchForm/GetInTouchForm";
import OurPartners from "./components/AboutUs/OurPartners";
import OurStory from "./components/AboutUs/OurStory";
import PreOrderForm from "./components/preOrderForm/PreOrderForm";
import AuthorsStory from "./components/authorsPage/AuthorsStory";
import TellStoryForm from "./components/tellStoryForm/TellStoryForm";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ScrollToTop />      
      <BurgerMenu dropdown={dropdown} setDropdown={setDropdown} />     

      <Switch>
        <Route 
          exact path="/" 
          render={(props) => <LandingPage {...props} />} 
        />
        <Route
          path="/authors-page"
          render={(props) => <Authors {...props} />}
        />
        <Route
          path="/authors-story"
          render={(props) => <AuthorsStory {...props} />}
        />
        <Route 
          path="/books" 
          render={(props) => <Books {...props} />} 
        />
        <Route
          path="/preOrderForm"
          render={(props) => <PreOrderForm {...props} />}
        />
        <Route 
          path="/podcasts" 
          render={(props) => <Podcasts {...props} />} 
        />
        <Route
          path="/short-stories"
          render={(props) => <ShortStories {...props} />}
        />
        <Route
          path="/join-the-movement"
          render={(props) => <JoinTheMovement {...props} />}
        />
        <Route
          path="/tell-your-story"
          render={(props) => <TellStoryForm {...props} />}
        />
        <Route
          exact
          path="/authorsStory"
          render={(props) => <AuthorsStory {...props} />}
        />
        <Route
          exact
          path="/about-us"
          render={(props) => <AboutUs {...props} />}
        />
        <Route
          exact
          path="/our-team"
          render={(props) => <OurTeam {...props} />}
        />
        <Route
          exact
          path="/send-email"
          render={(props) => <GetInTouchForm {...props} />}
        />
        <Route
          exact
          path="/our-partners"
          render={(props) => <OurPartners {...props} />}
        />
        <Route
          exact
          path="/our-story"
          render={(props) => <OurStory {...props} />}
        />        
      </Switch>
      <hr />

      <Footer />      
    </>
  );
};

export default App;
