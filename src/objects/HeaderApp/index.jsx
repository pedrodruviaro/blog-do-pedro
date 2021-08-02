import React from 'react'
import FlexContainer from '../../components/FlexContainer'
import ThemeToggler from '../../components/ThemeToggler'
import { HeaderStyled, LinksContainer } from './styles'

export default function Index(props) {
    return (
        <HeaderStyled>
            <FlexContainer justify="space-between">
            <h1>Pedro's Blog</h1>

            <LinksContainer>
                <a href="#">about me</a>
                <a href="#">post list</a>
                <a href="#">contac</a>
            </LinksContainer>

            <ThemeToggler setDarkTheme={props.setDarkTheme} />
            </FlexContainer>
        </HeaderStyled>
    )
}
