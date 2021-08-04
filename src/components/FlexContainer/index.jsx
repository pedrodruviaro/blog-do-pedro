import styled from "styled-components";

const FlexContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1440px;
    padding: ${props => props.padding ? props.padding : "1.5rem"};

    display: flex;
    align-items: ${props => props.align ? props.align : "center"};
    justify-content:  ${props => props.justify ? props.justify : "center"};
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap};


    @media (max-width: 600px){
        flex-direction: column;
        gap: 1rem;
    }


    @media (max-width: 768px){
        padding: 1rem;
        width: 90%;
    }
`

export default FlexContainer