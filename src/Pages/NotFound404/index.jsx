import React from "react";
import illustration from "../../images/lost-404.svg";
import { NotFoundContainer } from "./styles.jsx";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import FlexContainer from "../../components/FlexContainer";
import BannerContainer from "../../components/BannerContainer";

export default function Index() {
  const history = useHistory();

  return (
    <NotFoundContainer>
      <FlexContainer direction="column" gap="2rem">
        <h1>
          Sorry, page not found... <strong>:(</strong>
        </h1>
        <BannerContainer>
        <img src={illustration} alt="Illustration of a guy looking a map." />
        </BannerContainer>
        <Button onClick={() => history.push("/")}>Back to home</Button>
      </FlexContainer>
    </NotFoundContainer>
  );
}
