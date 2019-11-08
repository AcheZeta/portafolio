/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import H2Styled from '../Styled/H2Styled'
import H3Styled from '../Styled/H3Styled'
import H4Styled from '../Styled/H4Styled'

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  row-gap: 0.5em;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const ProjectImg = styled.img`
  width: 200px;
  height: 300px;
  border: 5px solid #3f0f3f;
  border-radius: 10px
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rbga(0, 0, 0, 0.6);
`

const Projects = props => (
  <div className='Projectos'>
    <H2Styled name='<Proyectos' />
    <ProjectContainer>
      {props.data.map((proj, index) => (
        <div className='Project-item' key={`proj-${index}`}>
          <H3Styled>{proj.name}</H3Styled>
          <H4Styled>{proj.description}</H4Styled>
          <a href={proj.demoLink} target='_blank'>
            <ProjectImg src={proj.image} alt={proj.name} />
          </a>
        </div>
      ))}
    </ProjectContainer>
  </div>
)

export default Projects
