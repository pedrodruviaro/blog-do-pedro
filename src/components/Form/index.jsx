import styled from 'styled-components'

export const FormStyled = styled.form`
    width: 85%;
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        padding: .5rem;
        font-size: 1rem;
        border: 1px solid;
        border-radius: 2px;
    }

    input:focus,
    textarea:focus {
        outline-color: ${props => props.theme.accent};
    }

    textarea {
        padding: .5rem;
        font-size: 1rem;
        border: 1px solid;
        border-radius: 2px;
        min-height: 150px;
    }
`
