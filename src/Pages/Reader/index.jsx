import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import FlexContainer from '../../components/FlexContainer'

export default function Index(props) {

    const history = useHistory()

    return (
        <FlexContainer direction="column" gap="1rem">
            <h1>{props.post.title}</h1>
            <p>{props.post.description}</p>
            <p>{props.post.content}</p>

            <Button onClick={() => history.push("/")}>Return to main page</Button>
        </FlexContainer>
    )
}
