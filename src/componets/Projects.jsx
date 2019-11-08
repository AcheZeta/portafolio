/* eslint-disable no-unused-vars */
import React from 'react'
import H2Styled from '../Styled/H2Styled'
import H3Styled from '../Styled/H3Styled'
import H4Styled from '../Styled/H4Styled'
import SpanStyled from '../Styled/SpanStyled'
const Projects = props => (
  <div className='Projectos'>
    <H2Styled name='<Proyectos' />
    <div className='Projects-container'>
      {props.data.map((proj, index) => (
        <div className='Project-item' key={`proj-${index}`}>
          <H3Styled>{proj.name}</H3Styled>
          <H4Styled>{proj.description}</H4Styled>
          {/* <SpanStyled>{proj.demoLink}</SpanStyled> */}
        </div>
      ))}
    </div>
  </div>
)

export default Projects
