import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Theme";
import ResetCSS from "./styles/ResetCSS";
import GlobalStyles from "./styles/GlobalStyles";
import MainGrid from "./components/MainGrid";
import HeaderApp from "./objects/HeaderApp";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Reader from "./Pages/Reader";
import NotFound404 from "./Pages/NotFound404";

function App() {
  // reader
  const [currentPost, setCurrentPost] = useState({
    title: "Nothing to see here... chose a post on the main page!",
    content: "",
    description: "",
  });

  function toggleCurrentPost(post) {
    setCurrentPost(post);
  }

  // toggle dark/light theme
  const [toggleDarkTheme, setToggleDarkTheme] = useState(false);

  function setDarkTheme() {
    setToggleDarkTheme(!toggleDarkTheme);
  }

  return (
    <ThemeProvider theme={toggleDarkTheme === true ? darkTheme : lightTheme}>
      <ResetCSS />
      <GlobalStyles />
      <MainGrid>
        <BrowserRouter>
          <HeaderApp setDarkTheme={setDarkTheme} />{" "}
          <main>
            <Switch>
              <Route exact path="/">
                <Blog toggleCurrentPost={toggleCurrentPost} />
              </Route>{" "}
              <Route exact path="/about">
                <About />
              </Route>{" "}
              <Route exact path="/contact">
                <Contact />
              </Route>{" "}
              <Route exact path="/reader">
                <Reader post={currentPost} />{" "}
              </Route>{" "}
              <Route path="*">
                <NotFound404 />
              </Route>{" "}
            </Switch>{" "}
          </main>{" "}
        </BrowserRouter>
        <footer> &copy; Copyright 2021 </footer>{" "}
      </MainGrid>{" "}
    </ThemeProvider>
  );
}

export default App;
