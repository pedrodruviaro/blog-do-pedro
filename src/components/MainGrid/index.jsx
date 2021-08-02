import styled from "styled-components";

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 12em 1fr;
    grid-template-rows: 8vh 1fr 8vh;
    grid-template-areas: "header header"
                            "menu main"
                            "footer footer";
    min-height: 100vh;


    header {
        grid-area: header;
    }

    footer {
        grid-area: footer;
    }

    menu {
        grid-area: menu;
    }

    main {
        grid-area: main;
    }
    

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 8vh 8vh 1fr 8vh;
        grid-template-areas: "header"
                            "menu"
                            "main"
                            "footer";
    }
`

export default MainGrid