import styled from "styled-components";

export const HeaderStyled = styled.header`
    box-shadow: ${props => props.theme.shadow} 0px 2px 4px;

    h1 {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.5rem;
    }
`

export const LinksContainer = styled.div`

    a {
        color: inherit;
        text-decoration: none;
        margin: 0 1rem;
        padding: .25rem;
        border: 1px solid transparent;
        border-radius: 5px;
        outline: none;
    }

    a:hover,
    a:active,
    a:focus {
        border: 1px solid ${props => props.theme.accent};
    }
`