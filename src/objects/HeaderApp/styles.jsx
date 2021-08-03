import styled from "styled-components";

export const HeaderStyled = styled.header`
    box-shadow: ${props => props.theme.shadow} 0px 2px 4px;

    img {
        width: 120px;
    }
`

export const LinksContainer = styled.nav`

    a {
        color: inherit;
        text-decoration: none;
        margin: 0 1rem;
        padding: .25rem;
        border: 1px solid transparent;
        border-radius: 5px;
        outline: none;
        position: relative;
    }

    a:hover,
    a:focus {
        border: 1px solid ${props => props.theme.accent};
    }

    .active {
        color: ${props => props.theme.accent};
        font-weight: 600;
    }
`