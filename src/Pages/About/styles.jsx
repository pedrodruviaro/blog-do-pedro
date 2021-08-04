import styled from "styled-components";

export const AboutStyled = styled.div`
  img {
    width: 200px;
    transition: transform 200ms ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
  }

  .text {
      width: 90%;
      max-width: 600px;
      text-align: center;
      margin: 0 auto;
      font-size: 1.125rem;

  }
`;

export const GridProfile = styled.div`
  width: min-content;
  margin: 4rem auto;
  grid-column-gap: 1.5em;
  grid-template-columns: min-content max-content;
  display: grid;
  grid-template-areas:
    "img title"
    "img text";

  img {
    grid-area: img;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    box-shadow: ${(props) => props.theme.shadow} 0px 8px 24px,
      ${(props) => props.theme.shadow} 0px 10px 20px,
      ${(props) => props.theme.shadow} 0px 6px 6px;
  }

  h2 {
    grid-area: title;
    font-size: 3rem;
    align-self: center;
    font-weight: 300;
    letter-spacing: 2px;
  }

  h2 strong {
    font-weight: 600;
    display: block;
  }

  p {
    grid-area: text;
    background: ${(props) => props.theme.accent};
    align-self: baseline;
    padding: 0.25em;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: right;
    position: relative;
    grid-column: -1/1;
    left: -1.5em;
    width: calc(100% + 1.5em);
    color: #333;
  }

  @media (max-width: 600px){
    grid-template-columns: min-content;
    grid-template-areas:
    "title"
    "text"
    "img";
    text-align: center;


    p {
      width: max-content;
      margin: 1rem auto;
      position: static;
      grid-column: 1;
      padding: 0.25rem 1rem
    }
  }

`;

export const AboutLinksContainer = styled.div`
    margin: 4rem auto;
    width: min-content;
    display: flex;
    align-items: center;
    font-size: 2rem;
    
    a {
        color: ${(props) => props.theme.accent};
        margin: 0 1rem;
        padding: .25em;
        transition: transform 200ms ease-in-out;
    }

    a:hover,
    a:focus {
        transform: scale(1.25);
        outline: 1px solid;
    }
`

export const LinkBio = styled.a`
  text-decoration: none;
  color: ${props => props.theme.accent};
  font-weight: 500;

    &:hover,
    &:focus {
        text-decoration: underline;
    }
`