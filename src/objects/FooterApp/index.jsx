import React from "react";
import FlexContainer from "../../components/FlexContainer";
import LinksContainer from "../../components/LinksContainer";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import Logo from "../../components/Logo";
import { FooterStyled } from "./styles";

export default function index() {
  return (
    <FooterStyled>
      <FlexContainer justify="space-between">
        <Logo />

        <LinksContainer>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/pedro-henrique-dalmolin-ruviaro-4b4a00209/"
          >
            <FaLinkedinIn />
            Linkedin
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/pedrodruviaro"
          >
            <FaGithub />
            GitHub
          </a>
        </LinksContainer>

        <p className="copy">&copy; Copyright 2021</p>
      </FlexContainer>
    </FooterStyled>
  );
}
