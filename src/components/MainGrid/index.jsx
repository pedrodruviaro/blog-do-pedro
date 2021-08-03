import styled from "styled-components";

const MainGrid = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr 6vh;
    grid-template-areas: "header"
                            "main"
                            "footer";



    header {
        grid-area: header;
        align-self: center;
    }

    footer {
        grid-area: footer;
        box-shadow: ${props => props.theme.shadow} 0px -2px 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .8rem;
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