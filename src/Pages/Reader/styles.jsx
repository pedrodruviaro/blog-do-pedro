import styled from "styled-components";

export const ReaderTitle = styled.h1`
    font-size: 2rem;
    margin: 1.5rem;
`

export const ReaderDescription = styled.p`
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.125rem;

    &::after {
        content: "";
        display: block;
        width: 100px;
        height: 3px;
        background: ${props => props.theme.accent};
        margin: .5em auto;
    }
`


export const ReaderContent = styled.p`
    line-height: 1.6;
    font-size: 1.05rem;
    text-align: justify;
`