const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
    }

    p {
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5 {
        font-weight: 700;
    }
`

export default GlobalStyles