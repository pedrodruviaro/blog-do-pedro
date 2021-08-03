import React from "react";
import perfil from "../../images/perfil.jpg";
import { AboutLinksContainer, AboutStyled, GridProfile } from "./styles";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import FlexContainer from "../../components/FlexContainer";

export default function Index() {
  return (
    <AboutStyled>
      <FlexContainer direction="column">
        <GridProfile>
          <img src={perfil} alt="Pedro profile" />
          <h2>HI, I'm Pedro</h2>
          <p>a front-end developer</p>
        </GridProfile>

        <p className="text">
          In early 2021, i started my way up in the programming world, always
          studying hard and practicing along the way. You can check more about
          me in my Linkedin, where i update frequently so all the people out
          there can see what i'm doing and check my progress along the way.
        </p>

        <AboutLinksContainer>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pedro-henrique-dalmolin-ruviaro-4b4a00209/">
            <FaLinkedinIn />
          </a>
          <a rel="noreferrer" target="_blank" href="https://github.com/pedrodruviaro">
            <FaGithub />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/pedrodalmolin/">
            <FaInstagram />
          </a>
        </AboutLinksContainer>
      </FlexContainer>
    </AboutStyled>
  );
}
