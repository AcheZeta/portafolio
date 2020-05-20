/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Social from './Social'

const FooterStyled = styled.footer`
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: .5rem;
  margin-top: 2rem;
  background-color: #f5f5f5;
  text-align: center;
  font-family: Lato;
`
const AStyled = styled.a`
  color: #212121;
  text-decoration: none;
  font-style: italic;
  font-family: Lato;
`

const Footer = ({ social }) => (
    <FooterStyled>
        <Social social={social} />
        <AStyled href="mailto:hame.elizalde@gmail.com">
            hame.elizalde@gmail.com</AStyled>
    </FooterStyled>
)

export default Footer