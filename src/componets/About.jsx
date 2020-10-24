/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import Social from './Social'
import Scroll from '../componets/Scroll'

const AboutStyle = styled.div`
  text-align: left;
  height: 100vh;
  display: flex;
  align-items: center;
`

const Nameh2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1.2px;
  color: #212121;
  margin: 0.5 0 0 0;
  text-transform: uppercase;
`
const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 400;
  font-size: 1.5rem;
  color: #424041;
`

const AboutBio = styled.p`
  color: #1f262a;
  font-size: 1.2em;
  font-weight: 500;
`

const AboutLocation = styled.p`
  color: #7a757a;
  font-size: 1em;
  font-weight: 400;
`

const About = ({ social }) => (
  <AboutStyle>
    <div className='About-container'>
      <div className='AboutName'>
        <Nameh2>Hame ELizalde</Nameh2>
      </div>
      <AboutProfession>Front-End Developer</AboutProfession>
      <AboutBio>
        Soy una desarrolladora web con experiencia en sectores de educación y marketing.
        Me apasiona colaborar en proyectos que generen un impacto positivo en la sociedad y aprender de las personas que me rodean.
      </AboutBio>
      <AboutLocation>📍  México</AboutLocation>
      <div className='About-social'>
        <Social social={social} />
      </div>
      <Scroll />
    </div>
  </AboutStyle>
)

export default About
