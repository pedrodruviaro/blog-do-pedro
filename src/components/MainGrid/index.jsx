import styled from "styled-components";

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 8vh 1fr 8vh;
    grid-template-areas: "header"
                            "main"
                            "footer";



    header {
        grid-area: header;
    }

    footer {
        grid-area: footer;
    }

    main {
        grid-area: main;
    }
    

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 8vh 1fr 8vh;
        grid-template-areas: "header"
                            "main"
                            "footer";
    }
`

export default MainGrid