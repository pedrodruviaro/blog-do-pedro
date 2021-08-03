import styled from 'styled-components'

export const PrimaryTitle = styled.h1`
    font-size: 2rem;
    line-height: 1.1;
    margin: 2rem auto;
    text-align: center;

    &::after {
        content: "";
        display: block;
        width: 100px;
        height: 3px;
        background: ${props => props.theme.accent};
        margin: .5em auto;
    }
`