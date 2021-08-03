import React from 'react'
import illustration from '../../images/lost-404.svg'
import {NotFoundContainer} from './styles.jsx'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'

export default function Index() {

    const history = useHistory()

    return (
        <NotFoundContainer>
            <h1>Sorry, page not found... <strong>:(</strong></h1>
            <img src={illustration} alt="Illustration of a guy looking a map." />
            <Button onClick={() => history.push("/")}>Back to home</Button>
        </NotFoundContainer>
    )
}
