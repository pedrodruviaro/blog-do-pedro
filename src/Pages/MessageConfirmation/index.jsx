import React from 'react'
import FlexContainer from '../../components/FlexContainer'
import { PrimaryTitle } from '../../components/Typography'
import { Message } from './styles'
import messageBanner from '../../images/message-sent.svg'
import BannerContainer from '../../components/BannerContainer'
import Button from '../../components/Button'
import { RiArrowGoBackFill } from "react-icons/ri";
import { useHistory } from 'react-router-dom'

export default function Index() {

    const history = useHistory()

    return (
        <FlexContainer direction="column" gap="2rem">
            <PrimaryTitle>Thanks for the contact</PrimaryTitle>
            <Message>I will respond you ASAP!</Message>

            <Button onClick={() => history.push("/")}>Return to main page<RiArrowGoBackFill /></Button>

            <BannerContainer>
                <img src={messageBanner} alt="" />
            </BannerContainer>
        </FlexContainer>
    )
}
