import React from 'react'
import { Link } from 'react-router-dom'
import FlexContainer from '../../components/FlexContainer'
import ThemeToggler from '../../components/ThemeToggler'
import { HeaderStyled, LinksContainer } from './styles'

export default function Index(props) {
    return (
        <HeaderStyled>
            <FlexContainer justify="space-between">
            <h1>Pedro's Blog</h1>

            <LinksContainer>
                <Link to="/">blog</Link>
                <Link to="/about">about me</Link>
                <Link to="/contact">contact</Link>
            </LinksContainer>

            <ThemeToggler setDarkTheme={props.setDarkTheme} />
            </FlexContainer>
        </HeaderStyled>
    )
}
