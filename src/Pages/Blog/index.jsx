import React from "react";
import FlexContainer from "../../components/FlexContainer";
import { Article } from "./styles";
import Button from '../../components/Button'
import { useHistory } from "react-router-dom";
import { PrimaryTitle } from "../../components/Typography";
import { BiBookReader } from "react-icons/bi"
//data articles
import {articles} from '../../data/articles'

export default function Index(props) {

    const history = useHistory()

    // const articles = [
    //     {
    //       title: "Tips about CSS",
    //       description: "Lorem ipsum dolor",
    //       content: "aqui tem um conteudo",  
    //     }
    // ]

    function handleReader(post) {
       props.toggleCurrentPost(post)
       history.push('/reader')
    }



  return (
    <FlexContainer direction="column">
      <PrimaryTitle>Latest posts</PrimaryTitle>

        {articles.map(article => (
            <Article key={article.title}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Button onClick={() => handleReader(article)}>Read the full article {<BiBookReader />} </Button>
          </Article>
        ))}

    </FlexContainer>
  );
}
