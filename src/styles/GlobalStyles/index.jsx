const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
    }
`

export default GlobalStyles