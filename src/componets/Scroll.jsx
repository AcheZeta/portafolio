/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  0% {
       transform:translateY(-5px) rotate(45deg);
       opacity: 0;
  }
  100% {
       transform:translateY(5px) rotate(45deg);
       opacity: 1;
  }
`

const ArrowScroll = styled.div`
  border-right-style: solid;
  border-bottom-style: solid;
  height: 10px;
  width: 10px;
  animation: ${scroll} 0.75s alternate infinite;
  margin: 15%;
`

const ScrollArrow = () => <ArrowScroll />

export default ScrollArrow
