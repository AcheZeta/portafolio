/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin: 1em 0 0 0;
  color: #212121;
  letter-spacing: 1px;
  font-size: 2rem;
  text-transform: uppercase;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>;

export default H2Styled;
