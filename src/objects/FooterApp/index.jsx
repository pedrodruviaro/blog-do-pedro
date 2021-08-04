import React from "react";
import FlexContainer from "../../components/FlexContainer";
import LinksContainer from "../../components/LinksContainer";
import { FaGithub } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";

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
            href="https://github.com/pedrodruviaro"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://pedrodruviaro.netlify.app/"
          >
            <CgWorkAlt />
            Portfolio
          </a>
        </LinksContainer>

        <p className="copy">&copy; Copyright 2021</p>
      </FlexContainer>
    </FooterStyled>
  );
}
