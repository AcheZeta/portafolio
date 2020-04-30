/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const AboutStyle = styled.div`
  text-align: left;
`
/*
const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`
const AboutAvatarImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 5px solid #3f0f3f;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rbga(0, 0, 0, 0.6);
`
*/
const AboutName = styled.div`
  text-align: left;
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
  font-size: 1em;
  font-weight: 500;
`

const AboutLocation = styled.p`
  color: #7a757a;
  font-size: 1em;
  font-weight: 400;
`
const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className='About-container'>
      <AboutName>
        <Nameh2>{name}</Nameh2>
      </AboutName>
      <AboutProfession>{profession}</AboutProfession>
      <AboutBio>{bio}</AboutBio>
      <AboutLocation>{address}</AboutLocation>
      <div className='About-social'>
        <Social social={social} />
      </div>
    </div>
  </AboutStyle>
)

export default About
