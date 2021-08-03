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
        font-size: 1.25rem;
    }
    
    p {
        font-size: 1.0125rem;
        margin-bottom: 1.5rem;
    }
`

export const GridArticleInfos = styled.div`

    margin: 2rem 0;
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: .5rem;
    grid-template-columns: min-content min-content;
    grid-template-areas: "img category"
                        "img date";

    div {
        grid-area: img;

        background-color: #f1c40f;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #111;
        font-weight: 600;
        align-self: center;
    }

    
    .category {
        grid-area: category;
        font-weight: 600;
    }

    .date {
        grid-area: date;
        font-size: .8rem;
        opacity: .8;
    }
`