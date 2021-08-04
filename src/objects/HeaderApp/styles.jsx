import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-shadow: ${(props) => props.theme.shadow} 0px 2px 4px;
  
  a {
    color: inherit;
    text-decoration: none;
  }

`;
