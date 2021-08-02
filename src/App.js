import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Theme";
import ResetCSS from "./styles/ResetCSS";
import GlobalStyles from "./styles/GlobalStyles";
import MainGrid from './components/MainGrid'
import HeaderApp from './objects/HeaderApp'
import { useState } from "react";

function App() {

  const [toggleDarkTheme, setToggleDarkTheme] = useState(false)

  function setDarkTheme(){
    setToggleDarkTheme(!toggleDarkTheme)
  }

  return (
    <ThemeProvider theme={toggleDarkTheme === true ? darkTheme : lightTheme}>
      <ResetCSS />
      <GlobalStyles />

      <MainGrid>
        <HeaderApp setDarkTheme={setDarkTheme} />
        <main>main</main>
        <footer>footer</footer>
      </MainGrid>
    </ThemeProvider>
  );
}

export default App;
