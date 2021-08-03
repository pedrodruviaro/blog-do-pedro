import styled from "styled-components";


export const Article = styled.article`
    border-top: 3px solid #CC3945;
    width: 100%;
    padding: 1.5rem;
    padding-bottom: .5rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    box-shadow: ${props => props.theme.shadow} 0px 6px 12px -2px, ${props => props.theme.shadow} 0px 3px 7px -3px;


    h3 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }
    
    p {
        margin: 2rem 0;
        font-size: 1.0125rem;
    }
`