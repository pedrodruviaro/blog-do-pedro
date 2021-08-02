import React from "react";
import ResetCSS from "./styles/ResetCSS";
import GlobalStyles from "./styles/GlobalStyles";
import MainGrid from './components/MainGrid'

function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />

      <MainGrid>
        <header>header</header>
        <aside>menu</aside>
        <main>main</main>
        <footer>footer</footer>
      </MainGrid>
    </>
  );
}

export default App;
