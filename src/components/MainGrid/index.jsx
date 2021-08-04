import styled from "styled-components";

const MainGrid = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas: "header"
                            "main"
                            "footer";



    header {
        grid-area: header;
        align-self: center;
    }

    footer {
        grid-area: footer;
    }

    main {
        grid-area: main;
    }
    

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr min-content;
        grid-template-areas: "header"
                            "main"
                            "footer";
    }
`

export default MainGrid