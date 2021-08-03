import styled from "styled-components";

export const AboutStyled = styled.div`
  img {
    width: 200px;
  }

  .text {
      width: 80%;
      max-width: 600px;
      text-align: center;
      margin: 0 auto;
      font-size: 1.125rem;

  }
`;

export const GridProfile = styled.div`
  width: min-content;
  margin: 4rem auto;
  grid-column-gap: 1em;
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
  }

  p {
    grid-area: text;
    background: ${(props) => props.theme.accent};
    align-self: baseline;
    padding: 0.25em;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: right;
    position: relative;
    grid-column: -1/1;
    left: -1.5em;
    width: calc(100% + 1.5em);
    color: #333;
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