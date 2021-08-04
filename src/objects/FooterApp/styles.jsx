import styled from "styled-components";

export const FooterStyled = styled.footer`
  box-shadow: ${(props) => props.theme.shadow} 0px -2px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  .copy {
      font-size: .8rem;
  }
`;
