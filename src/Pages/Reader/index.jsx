import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import FlexContainer from '../../components/FlexContainer'
import { RiArrowGoBackFill } from "react-icons/ri";
import { ReaderContent, ReaderDescription, ReaderTitle } from './styles';


export default function Index(props) {

    const history = useHistory()

    return (
        <FlexContainer direction="column" gap="1rem">
            <ReaderTitle>{props.post.title}</ReaderTitle>
            <ReaderDescription>{props.post.description}</ReaderDescription>
            <ReaderContent>{props.post.content}</ReaderContent>
            <Button onClick={() => history.push("/")}>Return to main page<RiArrowGoBackFill /></Button>
        </FlexContainer>
    )
}
