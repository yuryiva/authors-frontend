import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./components/landingPage/LandingPage";
import Authors from "./components/authorsPage/Authors";
import Books from "./components/books/Books";
import Podcasts from "./components/podcasts/Podcasts";
import ShortStories from "./components/shortStories/ShortStories";
import JoinTheMovement from "./components/joinTheMovement/JoinTheMovement";
import BurgerMenu from "./components/header/BurgerMenu";

// import Banner from "./components/banner/Banner";

import PreOrderForm from "./components/preOrderForm/PreOrderForm";
import AuthorsStory from "./components/authorsPage/AuthorsStory";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <BurgerMenu open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
      {/* <Banner /> */}

      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route
          path="/authors-page"
          render={(props) => <Authors {...props} />}
        />
        <Route path="/books" render={(props) => <Books {...props} />} />
        <Route
          path="/preOrderForm"
          render={(props) => <PreOrderForm {...props} />}
        />
        <Route path="/podcasts" render={(props) => <Podcasts {...props} />} />
        <Route
          path="/short-stories"
          render={(props) => <ShortStories {...props} />}
        />
        <Route
          path="/join-the-movement"
          render={(props) => <JoinTheMovement {...props} />}
        />
        <Route
          exact
          path="/authorsStory"
          render={(props) => <AuthorsStory {...props} />}
        />

        {/* <Route path="/home" render={(props) => <MainSection {...props} />} /> */}
      </Switch>
      <hr />

      <Footer />
    </div>
  );
};

export default App;
