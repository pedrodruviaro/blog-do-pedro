import React from "react";
import perfil from "../../images/perfil.jpg";
import { AboutLinksContainer, AboutStyled, GridProfile, LinkBio } from "./styles";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import FlexContainer from "../../components/FlexContainer";

export default function Index() {
  return (
    <AboutStyled>
      <FlexContainer direction="column">
        <GridProfile>
          <img src={perfil} alt="Pedro profile" />
          <h2>Hi, I'm <strong>Pedro</strong></h2>
          <p>front-end dev</p>
        </GridProfile>

        <p className="text">
          In early 2021, i started my way up in the programming world, always
          studying hard and practicing along the way. You can check more about
          me in my <LinkBio rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pedro-henrique-dalmolin-ruviaro-4b4a00209/">Linkedin</LinkBio>, where i update frequently so all the people out there can see what i'm doing and check my progress along the way. You can algo check my or my <LinkBio rel="noreferrer" target="_blank" href="https://pedrodruviaro.netlify.app/">Personal Website</LinkBio> to see some of my work as a developer.
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
