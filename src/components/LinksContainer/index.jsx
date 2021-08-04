import styled from "styled-components";

const LinksContainer = styled.nav`
  display: flex;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.25rem;
    border: 1px solid transparent;
    border-radius: 5px;
    position: relative;

    display: flex;
    align-items: center;
  }

  svg { 
    margin-right: .5rem;
    color: ${({theme}) => theme.accent}
  }

  .active {
    color: ${(props) => props.theme.accent};
    font-weight: 600;
  }

  @media (max-width: 600px) {
    a {
      padding: 0rem;
      border: none;
    }
  }

  @media (min-width: 768px) {
    a:hover {
      border: 1px solid ${(props) => props.theme.accent};
    }
  }
`;

export default LinksContainer;
