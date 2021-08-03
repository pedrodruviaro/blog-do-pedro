import styled from "styled-components";

const Button = styled.button`

  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1rem;
  padding: 0.5em;
  background-color: ${(props) => props.theme.accent};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: transform 200ms ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.9;
    transform: scale(1.15);
  }
`;

export default Button
