import React from "react";
import { Link, useLocation } from "react-router-dom";
import FlexContainer from "../../components/FlexContainer";
import ThemeToggler from "../../components/ThemeToggler";
import { HeaderStyled, LinksContainer } from "./styles";

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
      <FlexContainer justify="space-between">
        <h1>Pedro's Blog</h1>

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
