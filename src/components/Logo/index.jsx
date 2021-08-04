import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.p`
    color: inherit;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 1.125rem;
    font-weight: 300;


  &::before {
    content: "<";
  }

  &::after {
    content: "/>";
  }
`

export default function index() {
    return (
        <LogoStyled>
            devpedro
        </LogoStyled>
    )
}
