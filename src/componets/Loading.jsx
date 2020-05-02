/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { keyframes } from 'styled-components'

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  padding: 2em;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 0.5em;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const AboutStyle = styled.div`
  text-align: left;
  height: 100vh;
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;
  background: #f5f5f5;
`
const move = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Nameh2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1.2px;
  color: #212121;
  margin: 0.5 0 0 0;
  text-transform: uppercase;
  animation: ${move} 2s ease-in both;;
`
const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 400;
  font-size: 1.5rem;
  color: #424041;
`


const Loading = () => (
    <MainStyle>
        <MainContainer>
        <AboutStyle>
                <Nameh2>Hame Elizalde</Nameh2>
            </AboutStyle>
        </MainContainer>
    </MainStyle>
)

export default Loading
