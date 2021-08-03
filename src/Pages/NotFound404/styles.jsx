import styled from "styled-components";

export const NotFoundContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;

    strong {
        color: ${props => props.theme.accent};
    }
    
    h1 {
        font-size: 3rem;
        margin-top: 2rem;
    }

    h1::after {
        content: "";
        display: block;
        width: 100px;
        height: 3px;
        background: ${props => props.theme.accent};
        margin: 2rem auto;
    }

    img {
        width: 50%;
        max-width: 500px;
    }

`