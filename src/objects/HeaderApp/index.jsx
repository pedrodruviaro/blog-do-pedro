import React from "react";
import { Link, useLocation } from "react-router-dom";
import FlexContainer from "../../components/FlexContainer";
import ThemeToggler from "../../components/ThemeToggler";
import { HeaderStyled, LinksContainer } from "./styles";
import logo from '../../images/demo.svg'

export default function Index(props) {
  const location = useLocation();

  const links = [
    {
      label: "blog",
      path: "/",
    },
    {
      label: "about me",
      path: "/about",
    },
    {
      label: "contact",
      path: "/contact",
    },
  ];

  return (
    <HeaderStyled>
      <FlexContainer justify="space-between" padding=".75rem 1.5rem">
        <Link to="/" className="logo" >devpedro</Link>

        <LinksContainer>
          {links.map((link) => (
            <Link key={link.path} className={link.path === location.pathname ? "active" : null} to={link.path}>{link.label}</Link>
          ))}
        </LinksContainer>

        <ThemeToggler setDarkTheme={props.setDarkTheme} />
      </FlexContainer>
    </HeaderStyled>
  );
}
